import { Query, Mutation, Resolver, ResolveProperty } from '@nestjs/graphql';

import { PostsService } from './posts.service';
import { AuthorsService } from '../authors/authors.service';
import { Author } from '../authors/types';

@Resolver('Post')
export class PostResolver {
    constructor(
        private readonly postsService: PostsService,
        private readonly authorsService: AuthorsService,
    ) { }

    @Query('posts')
    async getPosts() {
        return this.postsService.findAll();
    }

    @Mutation('upvotePost')
    async upvotePost(obj, { postId }) {
        return this.postsService.upvoteById(postId);
    }

    @ResolveProperty('author')
    async getAuthor(author: Author) {
        // Good place to use dataLoader here.
        const { id } = author;
        return this.authorsService.findOneById(id);
    }
}
