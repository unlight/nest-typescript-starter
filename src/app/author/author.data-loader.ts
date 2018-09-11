import DataLoader = require('dataloader');
import { PostService } from '../post/post.service';
import { Post } from '../post/types';

export const AuthorDataLoader = {
    provide: 'AuthorDataLoader',
    inject: [PostService],
    useFactory: (postService: PostService) => {
        return new DataLoader<number, Post>(async ids => postService.findManyByIds(ids));
    }
};
