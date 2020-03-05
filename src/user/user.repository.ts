import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async randomUser() {
        const [result] = await this.prisma.raw<User[]>(
            `select * from [User] order by random() limit 1`,
        );
        return result;
    }
}
