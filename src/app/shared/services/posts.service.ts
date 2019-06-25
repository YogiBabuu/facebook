import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { IResponsePosts } from '../interfaces/response/response-posts.interface';



@Injectable({
    providedIn: 'root'
})

export class PostsService {

    constructor(
        private http: HttpClient
    ) { }

    async getPosts() {

        const response = await this.http.get<IResponsePosts>('assets/posts.json').toPromise();
        return response.posts;
    }
}
