import { Args, Context, Query, Resolver, Info } from '@nestjs/graphql';

import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './models/user';
import { FindOneUserArgs, UserWhereUniqueInput } from './models/user.input';
import { SelectFields } from '../common/select-fields.decorator';
import { UserSelect } from '@prisma/client';

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
}
