import { FindManyUserArgs } from '@generated/type-graphql/resolvers/crud/User/args/FindManyUserArgs';
import { UserWhereUniqueInput } from '@generated/type-graphql/resolvers/inputs/UserWhereUniqueInput';
import { Args, Context, Parent, Query, ResolveProperty, Resolver, Mutation } from '@nestjs/graphql';
import { UserSelect } from '@prisma/client';

import { SelectFields } from '../common/select-fields.decorator';
import { Post } from '../post/models/post';
import { GraphQLContext } from '../types';
import { User } from './models/user';
import { UserService } from './user.service';
import { UserCreateInput } from './models/user-create-input';
import { CreateOneUserArgs } from '@generated/type-graphql/resolvers/crud/User/args/CreateOneUserArgs';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => User)
    async randomUser() {
        return this.userService.randomUser();
    }

    @Query(() => User, { nullable: true })
    async findOneUser(
        @Context() context: GraphQLContext,
        @Args('where') where: UserWhereUniqueInput,
        @SelectFields() select: UserSelect,
    ) {
        return context.prisma.user.findOne({
            where,
            select,
        });
    }

    @ResolveProperty(() => [Post])
    async posts(@Parent() user, @Context() context: GraphQLContext) {
        const result = await context.prisma.post.findMany({
            first: 5,
            where: { author: { id: user.id } },
        });
        return result || [];
    }

    @Query(() => [User])
    async findManyUser(@Context() context: GraphQLContext, @Args() args: FindManyUserArgs) {
        return context.prisma.user.findMany(args);
    }

    @Mutation(() => User)
    async createUser(@Context() context: GraphQLContext, @Args() args: CreateOneUserArgs) {
        const result = context.prisma.user.create(args);
        console.log('result', result);
        return result;
    }
}
