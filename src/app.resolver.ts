import { Query, ResolveProperty, Resolver } from '@nestjs/graphql';

import { AppModel } from './types/app.model';

@Resolver(() => AppModel)
export class AppResolver {
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
