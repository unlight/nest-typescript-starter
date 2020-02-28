import { User } from '@generated/type-graphql/models';
import { Query, Resolver } from '@nestjs/graphql';

import { PrismaService } from '../prisma/prisma.service';

@Resolver(of => User)
export class UserResolver {
    constructor(private readonly prisma: PrismaService) {}

    @Query(returns => User)
    async randomUser(): Promise<User> {
        // this.prisma.raw()
        const result = await this.prisma.user.findOne({ where: { id: '1' } });
        return result!;
    }
}
