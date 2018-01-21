import { Component } from '@nestjs/common';
import { find, filter } from 'lodash';

import { Post } from './types';

@Component()
export class PostsService {
    private readonly posts: Post[] = [
        { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
        { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
        { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
        { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
    ];

    findAll(): Post[] {
        return this.posts;
    }

    findAllByAuthor(authorId: number): Post[] {
        return filter(this.posts, { authorId });
    }

    findOneById(id) {
        return find(this.posts, { id });
    }

    upvoteById(id): Post {
        const post = this.findOneById(id);
        if (!post) {
            throw new Error(`Couldn't find post with id ${id}`);
        }

        post.votes += 1;

        return post;
    }
}
