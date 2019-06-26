import { IAuthor } from './author.interface';

export interface ICommentListItem {

    id: string;
    created_time: string;
    author: IAuthor;
    body: string;


}
