import { Query, Mutation, Resolver, ResolveProperty, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Author } from '../author/types';
import { GraphQLResolveInfo } from 'graphql';
import { Inject } from '@nestjs/common';
import DataLoader = require('dataloader');

@Resolver('Post')
export class PostResolver {
    constructor(
        private readonly postsService: PostService,
        @Inject('AuthorDataLoader') private authorDataLoader: DataLoader<number, Author>,
    ) { }

    @Query('posts')
    async getPosts(req, { id }, _, resolveInfo: GraphQLResolveInfo) {
        // A way to get requested fields from query.
        // const [authorFields] = resolveInfo.fieldNodes.map(f => f.selectionSet!.selections.map((selection: FieldNode) => selection.name.value));
        return this.postsService.findAll();
    }

    @Mutation('upvotePost')
    async upvotePost(@Args('postId') postId: number) {
        return this.postsService.upvoteById(postId);
    }

    @ResolveProperty('author')
    async getAuthor(author: Author) {
        const { id } = author;
        return this.authorDataLoader.load(id);
        // return this.authorsService.findOneById(id);
    }
}
