import { Query, Resolver, ResolveProperty } from '@nestjs/graphql';

import { AuthorsService } from './authors.service';
import { PostsService } from '../posts/posts.service';

import { GraphQLResolveInfo, FieldNode } from 'graphql';

@Resolver('Author')
export class AuthorResolver {
    constructor(
        private readonly authorsService: AuthorsService,
        private readonly postsService: PostsService,
    ) { }

    @Query('author')
    async getAuthor(obj, { id }, _, resolveInfo: GraphQLResolveInfo) {
        // A way to get requested fields from query.
        // const [authorFields] = resolveInfo.fieldNodes.map(f => f.selectionSet!.selections.map((selection: FieldNode) => selection.name.value));
        return await this.authorsService.findOneById(id);
    }

    @ResolveProperty('posts')
    async getPosts(author, _1, _2, resolveInfo: GraphQLResolveInfo) {
        // A way to get requested fields from query.
        // const [postFields] = resolveInfo.fieldNodes.map(f => f.selectionSet!.selections.map((selection: FieldNode) => selection.name.value));
        const { id } = author;
        return await this.postsService.findAllByAuthor(id);
    }
}
