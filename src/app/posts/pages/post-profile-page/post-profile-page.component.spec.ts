import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PostProfilePageComponent } from './post-profile-page.component';
import { PostListComponent } from '../../components/post-list/post-list.component';
import { PostListItemComponent } from '../../components/post-list-item/post-list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentsModule } from 'src/app/comments/comments.module';

describe('PostProfilePageComponent', () => {
    let component: PostProfilePageComponent;
    let fixture: ComponentFixture<PostProfilePageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: 
            [
                PostProfilePageComponent, 
                PostListComponent, 
                PostListItemComponent
            ],
            imports: 
            [
                RouterTestingModule,
                SharedModule,
                HttpClientTestingModule,
                CommentsModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostProfilePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
