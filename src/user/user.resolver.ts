import { FindManyUserArgs } from '@generated/type-graphql/resolvers/crud/User/args/FindManyUserArgs';
import { UserWhereUniqueInput } from '@generated/type-graphql/resolvers/inputs/UserWhereUniqueInput';
import { Args, Context, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { UserSelect } from '@prisma/client';

import { SelectFields } from '../common/select-fields.decorator';
import { Post } from '../post/models/post';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './models/user';
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
        @Context() context,
        @Args('where') where: UserWhereUniqueInput,
        @SelectFields() select: UserSelect,
    ) {
        return (context.prisma as PrismaService).user.findOne({
            where,
            select,
        });
    }

    @ResolveProperty(() => [Post])
    async posts(@Parent() user, @Context() context) {
        const result = await (context.prisma as PrismaService).post.findMany({
            first: 5,
            where: { author: { id: user.id } },
        });
        return result || [];
    }

    @Query(() => [User])
    async findManyUser(@Context() context: any, @Args() args: FindManyUserArgs) {
        return (context.prisma as PrismaService).user.findMany(args);
    }
}
