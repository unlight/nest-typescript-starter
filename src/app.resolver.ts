import { Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Boolean)
export class AppResolver {
    @Query(() => String, { name: 'version' })
    async value() {
        return '0.0.1';
    }
}
