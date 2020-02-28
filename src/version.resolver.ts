import { Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Boolean)
export class VersionResolver {
    @Query(() => String, { name: 'version' })
    async value() {
        return '0.0.1';
    }
}
