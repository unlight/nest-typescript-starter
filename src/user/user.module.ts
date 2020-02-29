import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    providers: [UserService, UserResolver, UserRepository, PrismaService],
})
export class UserModule {}
