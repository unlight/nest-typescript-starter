import { FindManyUserArgs } from '@generated/type-graphql/resolvers/crud/User/args/FindManyUserArgs';
import { UserCreateInput } from '@generated/type-graphql/resolvers/inputs/UserCreateInput';
import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly prisma: PrismaService,
    ) {}

    async findOneRandom() {
        return this.userRepository.randomUser();
    }

    async findMany(args: FindManyUserArgs) {
        return this.prisma.user.findMany(args);
    }

    async create(data: UserCreateInput) {
        return this.prisma.user.create({ data });
    }
}
