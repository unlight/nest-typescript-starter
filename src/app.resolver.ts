import { ConfigService } from '@nestjs/config';
import { Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { PinoLogger } from 'nestjs-pino';

import { AppModel } from './types/app.model';

@Resolver(() => AppModel)
export class AppResolver {
    constructor(private readonly logger: PinoLogger, private readonly config: ConfigService) {
        this.logger.setContext(this.constructor.name);
    }

    @Query(() => AppModel)
    app() {
        return {
            version: null,
        };
    }

    @ResolveProperty(() => String, { name: 'version' })
    async version() {
        return '0.0.1';
    }
}
