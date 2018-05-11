import { Module, MiddlewaresConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql';

import { AuthorsModule } from './authors/authors.module';
import { PostsModule } from './posts/posts.module';
import { AuthorResolver } from './authors/author.resolver';
import { PostResolver } from './posts/post.resolver';

@Module({
    imports: [GraphQLModule, AuthorsModule, PostsModule],
    providers: [AuthorResolver, PostResolver],
})
export class AppGraphQLModule {

    constructor(
        private readonly graphQLFactory: GraphQLFactory,
    ) { }

    configure(consumer: MiddlewaresConsumer) {
        const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
        const schema = this.graphQLFactory.createSchema({ typeDefs });
        consumer.apply(graphiqlExpress({ endpointURL: '/graphql' })).forRoutes({ path: '/graphiql', method: RequestMethod.GET });
        consumer.apply(graphqlExpress(req => ({ schema, rootValue: req }))).forRoutes({ path: '/graphql', method: RequestMethod.ALL });
    }
}
