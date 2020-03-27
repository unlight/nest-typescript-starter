import { ConfigService } from '@nestjs/config';
import { Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { PinoLogger } from 'nestjs-pino';

import { PrismaService } from './prisma/prisma.service';
import { AppModel } from './types/app.model';

@Resolver(() => AppModel)
export class AppResolver {
    constructor(
        private readonly logger: PinoLogger,
        private readonly config: ConfigService,
        private readonly prisma: PrismaService,
    ) {
        this.logger.setContext(this.constructor.name);
    }

    @Query(() => AppModel)
    app() {
        return {
            version: null,
        };
    }

    @ResolveProperty(() => String, { name: 'version' })
    version() {
        return '0.0.1';
    }

    @ResolveProperty(() => String)
    async databaseHealth() {
        let result = 'ok';
        try {
            await this.prisma.raw(`select 1 from "User" limit 1`);
        } catch (e) {
            result = `not ok (${e.message})`;
        }
        return result;
    }
}
