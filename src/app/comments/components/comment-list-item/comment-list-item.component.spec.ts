import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListItemComponent } from './comment-list-item.component';
import { ICommentListItem } from 'src/app/shared/interfaces/comment-list-item.interface';

describe('CommentListItemComponent', () => {
    let component: CommentListItemComponent;
    let fixture: ComponentFixture<CommentListItemComponent>;
    let $component: any;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommentListItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CommentListItemComponent);
        component = fixture.componentInstance;
        $component = fixture.nativeElement;
        fixture.detectChanges();
    });
    afterEach(() => {
        $component.remove();
    })
    

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should display body details', () => {

        component.comment = {
            body: 'To jest jakis komentarz' 
        }  as ICommentListItem;

        fixture.detectChanges();

        const $comment = $component.querySelector('.comment-body');
        expect($comment.textContent.trim()).toEqual('To jest jakis komentarz');
    });


});
