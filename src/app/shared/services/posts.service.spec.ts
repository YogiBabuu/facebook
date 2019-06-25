import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostsService } from './posts.service';
import { HomePageComponent } from 'src/app/core/pages/home-page/home-page.component';
import { IPostList } from '../interfaces/post-list.interface';
import { IPostListItem } from '../interfaces/post-list-item.interface';

describe('PostsService', () => {
    let httpMock: HttpTestingController
    let service: PostsService;


    beforeEach(() => { // beforeEach zdefiniowany uruchamia sie przed nested it's
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });

        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(PostsService)
        //console.log('beforeEach()');

    });

    it('should be created', () => {

        const service: PostsService = TestBed.get(PostsService);
        expect(service).toBeTruthy();
    });

    describe('getPosts', () => {



        it('should contain method "getPosts"', () => {

            const service: PostsService = TestBed.get(PostsService);
            expect(service.getPosts).toEqual(
                jasmine.any(Function))
        });

        it('should make HTTP request', async () => { // dodalismy asynch

            // 1. zarejestrowac request
            const request = service.getPosts(); // Promise

            // 2. stworzyc serwer HTTP, ktory bedzie zwracal mock data
            //const httpMock = TestBed.get(HttpTestingController);
            const server = httpMock.expectOne('assets/posts.json');

            const fakePostList = [
                { id: 'asdfas' },
                { id: 'asfghdfas' }

            ] as IPostList;

            // 2a. Zwracamy dane testowe
            server.flush(
                {
                    posts: fakePostList
                });



            // 3. pobrac dane z response
            const posts = await request;

            // 4. Sprawdzic poprawnosc otrzymanych data
            expect(posts).toEqual(fakePostList);
        })

    });


    describe('getPostsById', () => {

        it('should contain method "getPostsId"', () => {
            const service: PostsService = TestBed.get(PostsService);
            expect(service.getPostById).toEqual(
                jasmine.any(Function)
            );
        });


        it('should make HTTP request', async () => { // dodalismy asynch

            const PostId = 'aaaaaaaaaaaaaa';

            // 1. zarejestrowac request
            const request = service.getPostById(PostId); // Promise

            // 2. stworzyc serwer HTTP, ktory bedzie zwracal mock data
            //const httpMock = TestBed.get(HttpTestingController);
            const server = httpMock.expectOne('assets/posts.json');

            const fakePost = { id: 'aaaaaaaaaaaaaa' } as IPostListItem;

            const fakePostList = [
                fakePost,
                { id: 'bbbbbbbbbbbbbbbbbbbbbbb' }
            ] as IPostList;

            // 2a. Zwracamy dane testowe
            server.flush({
                posts: fakePostList
            });

            // 3. pobrac dane z response
            const post = await request;

            // 4. Sprawdzic poprawnosc otrzymanych data
            expect(post).toEqual(fakePost);
        })

    });

});