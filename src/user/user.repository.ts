import { User } from '@generated/type-graphql/models/User';
import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async randomUser(): Promise<User> {
        const [result] = await this.prisma.raw<User[]>(`
            select [id], [name], [email], [createdAt], [updatedAt]
            from [User]
            order by random() limit 1`);
        return result;
    }
}
