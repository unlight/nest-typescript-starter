import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async randomUser() {
        const [result] = await this.prisma.raw<User[]>(
            `SELECT * FROM "User" ORDER BY random() LIMIT 1`,
        );
        return result;
    }
}
