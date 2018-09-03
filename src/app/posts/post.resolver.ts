import { Query, Mutation, Resolver, ResolveProperty } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Author } from '../authors/types';
import { GraphQLResolveInfo } from 'graphql';
import { Inject } from '@nestjs/common';
import DataLoader = require('dataloader');

@Resolver('Post')
export class PostResolver {
    constructor(
        private readonly postsService: PostsService,
        @Inject('AuthorDataLoader') private authorDataLoader: DataLoader<number, Author>,
    ) { }

    @Query('posts')
    async getPosts(req, { id }, _, resolveInfo: GraphQLResolveInfo) {
        // A way to get requested fields from query.
        // const [authorFields] = resolveInfo.fieldNodes.map(f => f.selectionSet!.selections.map((selection: FieldNode) => selection.name.value));
        return this.postsService.findAll();
    }

    @Mutation('upvotePost')
    async upvotePost(req, { postId }) {
        return this.postsService.upvoteById(postId);
    }

    @ResolveProperty('author')
    async getAuthor(author: Author) {
        const { id } = author;
        return this.authorDataLoader.load(id);
        // return this.authorsService.findOneById(id);
    }
}
