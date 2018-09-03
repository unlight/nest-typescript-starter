import { Query, Resolver, ResolveProperty, Args } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { PostsService } from '../posts/posts.service';
import { GraphQLResolveInfo, FieldNode } from 'graphql';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Author')
export class AuthorResolver {
    constructor(
        private readonly authorsService: AuthorsService,
        private readonly postsService: PostsService,
    ) { }

    @Query('author')
    async getAuthor(@Args('id') id: number) {
        // A way to get requested fields from query.
        // const [authorFields] = resolveInfo.fieldNodes.map(f => f.selectionSet!.selections.map((selection: FieldNode) => selection.name.value));
        return this.authorsService.findOneById(id);
    }

    @ResolveProperty('posts')
    async getPosts(author, _1, _2, resolveInfo: GraphQLResolveInfo) {
        // A way to get requested fields from query.
        // const [postFields] = resolveInfo.fieldNodes.map(f => f.selectionSet!.selections.map((selection: FieldNode) => selection.name.value));
        const { id } = author;
        return this.postsService.findAllByAuthor(id);
    }
}
