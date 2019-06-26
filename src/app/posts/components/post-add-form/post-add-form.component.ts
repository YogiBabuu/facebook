import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import uuid from 'uuid';

@Component({
    selector: 'app-post-add-form',
    templateUrl: './post-add-form.component.html',
    styleUrls: ['./post-add-form.component.scss']
})
export class PostAddFormComponent implements OnInit {

    @Output() addPost = new EventEmitter();

    addPostForm = new FormGroup({
        body: new FormControl('')
    });

    get body() {
        return this.addPostForm.get('body');
    }

    constructor() { }

    ngOnInit() {
    }

    onSubmit(){
        const fields = this.addPostForm.getRawValue();

        fields.id = uuid();
        fields.author ={
            id: uuid(),
            name:'Anonymous',
            avatar_url: 'http://placeskull.com/50/50/827B60',


        };

        fields.created_time = new Date().toUTCString();
        fields.images = [
            'https://placekitten.com/408/287'
        ]
        console.log('onSubmit()', fields);

        this.addPost.next(
            Object.assign({}, fields)
        );
    }

}
