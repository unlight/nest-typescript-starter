import { FindManyPostArgs } from '@generated/type-graphql/resolvers/crud/Post/args/FindManyPostArgs';
import { FindManyUserArgs } from '@generated/type-graphql/resolvers/crud/User/args/FindManyUserArgs';
import { UserWhereUniqueInput } from '@generated/type-graphql/resolvers/inputs/UserWhereUniqueInput';
import { UseGuards, UsePipes } from '@nestjs/common';
import { Args, Context, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { UserSelect } from '@prisma/client';

import { Select } from '~app_modules/nestjs-prisma-select';

import { Post } from '../post/models/post';
import { GraphQLContext } from '../types';
import { CreateUserGuard } from './create-user.guard';
import { User } from './models/user';
import { UserCreateInput } from './models/user-create-input';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => User, { nullable: true })
    async randomUser() {
        return this.userService.findOneRandom();
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
        return user.posts || [];
    }

    @Query(() => [User])
    async findManyUser(@Args() args: FindManyUserArgs) {
        return this.userService.findMany(args);
    }

    @Mutation(() => User)
    @UseGuards(CreateUserGuard)
    @UsePipes()
    async createUser(@Args('data') data: UserCreateInput) {
        return this.userService.create(data);
    }
}
