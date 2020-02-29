import { User } from '@generated/type-graphql/models';
import { Query, Resolver } from '@nestjs/graphql';

import { PrismaService } from '../prisma/prisma.service';

@Resolver(of => User)
export class UserResolver {
    constructor(private readonly prisma: PrismaService) {}

    @Query(returns => User)
    async randomUser(): Promise<User> {
        const [result] = await this.prisma.raw<User[]>(`
            select [id], [name], [email], [createdAt], [updatedAt]
            from [User]
            order by random() limit 1`);
        return result;
    }
}
