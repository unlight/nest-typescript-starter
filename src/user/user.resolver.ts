import { FindManyPostArgs } from '@generated/type-graphql/resolvers/crud/Post/args/FindManyPostArgs';
import { FindManyUserArgs } from '@generated/type-graphql/resolvers/crud/User/args/FindManyUserArgs';
import { UserWhereUniqueInput } from '@generated/type-graphql/resolvers/inputs/UserWhereUniqueInput';
import { Args, Context, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { UserSelect } from '@prisma/client';

import { Post } from '../post/models/post';
import { Select } from '../prisma/select.decorator';
import { GraphQLContext } from '../types';
import { User } from './models/user';
import { UserCreateInput } from './models/user-create-input';
import { UserService } from './user.service';

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
        @Select() select: UserSelect,
    ) {
        return context.prisma.user.findOne({
            where,
            select,
        });
    }

    @ResolveProperty(() => [Post])
    async posts(@Parent() user: User, @Args() args: FindManyPostArgs) {
        return user.posts;
    }

    @Query(() => [User])
    async findManyUser(@Context() context: GraphQLContext, @Args() args: FindManyUserArgs) {
        return context.prisma.user.findMany(args);
    }

    @Mutation(() => User)
    async createUser(@Context() context: GraphQLContext, @Args('data') data: UserCreateInput) {
        return context.prisma.user.create({ data });
    }
}
