import { Injectable } from '@nestjs/common';
import { Post } from './types';

@Injectable()
export class PostsService {

    private readonly posts: Post[] = [
        { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
        { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
        { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
        { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
    ];

    upvoteById(id: number): Post {
        const post = <Post>this.findOneById(id);
        if (post == null) {
            throw new Error(`Couldn't find post with id ${id}`);
        }
        post.votes += 1;
        return post;
    }

    findOneById(id: number) {
        return this.posts.find(post => post.id === id);
    }

    findAll(): Post[] {
        return this.posts;
    }

    findAllByAuthor(authorId: number): Post[] {
        return this.posts.filter(post => post.authorId === authorId);
    }

}
