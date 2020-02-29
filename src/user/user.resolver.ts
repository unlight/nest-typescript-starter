import { User } from '@generated/type-graphql/models';
import { Query, Resolver } from '@nestjs/graphql';

import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => User)
    async randomUser() {
        return this.userService.randomUser();
    }
}
