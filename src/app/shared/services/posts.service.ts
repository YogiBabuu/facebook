import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { IResponsePosts } from '../interfaces/response/response-posts.interface';
import { IPostListItem } from '../interfaces/post-list-item.interface';
import { IPostList } from '../interfaces/post-list.interface';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

const STORAGE_POST_KEYNAME = 'posts';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(
        private http: HttpClient,
        private storage: StorageService
    ) { }

    async getPosts() {
        const posts = this.storage.read(STORAGE_POST_KEYNAME);
        if (!posts) {
            const freshPosts = await this.fetchPosts();
            this.storage.create(STORAGE_POST_KEYNAME, freshPosts);
            return freshPosts;
        }
        return posts;
    }

    async fetchPosts(): Promise<IPostList> {

        const url = environment.postsUrl;
        const response = await this.http.get<IResponsePosts>(url).toPromise();
        return response.posts;
    }



    async getPostById(postId: string): Promise<IPostListItem> {
        const posts = await this.getPosts();
        const foundPost = posts.find((post) => {
            return post.id === postId;
        })


        return foundPost;
    }

    async savePosts(posts: IPostList) {
        this.storage.create(STORAGE_POST_KEYNAME, posts);
    }

}
