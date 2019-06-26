import { Component, OnInit } from '@angular/core';
import { ICommentListItem } from 'src/app/shared/interfaces/comment-list-item.interface';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent implements OnInit {

comment: ICommentListItem = null;

  constructor() { }

  ngOnInit() {
  }

}
