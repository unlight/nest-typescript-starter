import { createParamDecorator } from '@nestjs/common';
import {
    buildSchema,
    ExecutionResult,
    graphql,
    GraphQLFieldResolver,
    GraphQLResolveInfo,
} from 'graphql';

jest.mock('@nestjs/common', () => {
    const originalModule = jest.requireActual('@nestjs/common');
    return {
        __esModule: true,
        ...originalModule,
        createParamDecorator: jest.fn(),
    };
});

let info: GraphQLResolveInfo | undefined;
const schema = buildSchema(`
type Query {
    ok: Boolean
    user: User
}

type User {
    id: String
    posts: [Post]
}

type Post {
    id: Int
    title: String
}

schema {
    query: Query
}
`);

async function executeGraphQL(query) {
    const resolver: GraphQLFieldResolver<any, any> = (
        source,
        args,
        context,
        i: GraphQLResolveInfo,
    ) => {
        info = i;
    };
    const graphqlArgs = {
        source: query,
        schema: schema,
        fieldResolver: resolver,
    };
    const response: ExecutionResult = await graphql(graphqlArgs);
    (createParamDecorator as jest.Mock).mockImplementation(callback => {
        return callback.bind(undefined, undefined, [undefined, undefined, undefined, info]);
    });
    const { SelectFields } = await import('./select-fields.decorator');
    return SelectFields;
}

it('select id', async () => {
    const SelectFields = await executeGraphQL(`query { user { id } }`);
    const result = SelectFields();
    expect(result).toEqual({ id: true });
});

it('nested fields should not be selected', async () => {
    const SelectFields = await executeGraphQL(`query { user { id, posts { title } } }`);
    const result = SelectFields();
    expect(result).toEqual({ id: true });
});
