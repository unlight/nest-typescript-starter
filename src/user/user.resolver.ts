import { User } from '@generated/type-graphql/models';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';

import { UserService } from './user.service';
import { FindOneUserArgs } from '@generated/type-graphql/resolvers/crud/User/args/FindOneUserArgs';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => User)
    async randomUser() {
        return this.userService.randomUser();
    }

    @Query(() => User, {
        nullable: true,
    })
    async findOneUser(@Context() context, @Args() args: FindOneUserArgs): Promise<User | null> {
        return context.prisma.user.findOne(args);
    }
}
