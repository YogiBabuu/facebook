import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './services/posts.service';
import { MyDatePipe } from './pipes/my-date.pipe';

@NgModule({
    declarations: [MyDatePipe],

    exports:[MyDatePipe],

    imports: [
        CommonModule
    ],
    providers:[
        PostsService
    ]
})
export class SharedModule { }
