import { Module, MiddlewareConsumer } from '@nestjs/common';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql';
import { AuthorsModule } from './authors/authors.module';
import { PostsModule } from './posts/posts.module';

@Module({
    imports: [GraphQLModule, AuthorsModule, PostsModule],
    providers: [],
})
export class AppGraphQLModule {

    constructor(
        private readonly graphQLFactory: GraphQLFactory,
    ) { }

    configure(consumer: MiddlewareConsumer) {
        const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
        const schema = this.graphQLFactory.createSchema({ typeDefs });
        consumer.apply(graphiqlExpress({ endpointURL: '/graphql' })).forRoutes('/graphiql');
        consumer.apply(graphqlExpress(req => ({ schema, rootValue: req }))).forRoutes('/graphql');
    }
}
