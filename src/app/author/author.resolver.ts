import { Query, Resolver, ResolveProperty, Args } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { PostService } from '../post/post.service';
import { GraphQLResolveInfo, FieldNode } from 'graphql';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Author')
export class AuthorResolver {
    constructor(
        private readonly authorService: AuthorService,
        private readonly postService: PostService,
    ) { }

    @Query('author')
    async getAuthor(@Args('id') id: number) {
        // A way to get requested fields from query.
        // const [authorFields] = resolveInfo.fieldNodes.map(f => f.selectionSet!.selections.map((selection: FieldNode) => selection.name.value));
        return this.authorService.findOneById(id);
    }

    @ResolveProperty('posts')
    async getPosts(author, _1, _2, resolveInfo: GraphQLResolveInfo) {
        // A way to get requested fields from query.
        // const [postFields] = resolveInfo.fieldNodes.map(f => f.selectionSet!.selections.map((selection: FieldNode) => selection.name.value));
        const { id } = author;
        return this.postService.findAllByAuthor(id);
    }
}
