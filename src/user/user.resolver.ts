import { Args, Context, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';

import { Post } from '../post/models/post';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './models/user';
import { UserWhereUniqueInput } from './models/user.input';
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
        // @SelectFields() select: UserSelect,
    ) {
        return (context.prisma as PrismaService).user.findOne({
            where,
            // select,
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
}
