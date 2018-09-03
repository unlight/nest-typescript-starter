import DataLoader = require('dataloader');
import { PostsService } from '../posts/posts.service';
import { Post } from '../posts/types';

export const AuthorDataLoader = {
    provide: 'AuthorDataLoader',
    inject: [PostsService],
    useFactory: (postsService: PostsService) => {
        return new DataLoader<number, Post>(ids => postsService.findManyByIds(ids));
    }
};
