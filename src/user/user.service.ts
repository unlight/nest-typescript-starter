import { User } from '@generated/type-graphql/models/User';
import { Injectable } from '@nestjs/common';

import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async randomUser(): Promise<User> {
        return this.userRepository.randomUser();
    }
}
