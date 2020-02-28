import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VersionResolver } from './version.resolver';

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: '~schema.gql',
        }),
    ],
    controllers: [AppController],
    providers: [
        { provide: AppService, useClass: AppService },
        { provide: VersionResolver, useClass: VersionResolver },
    ],
})
export class AppModule {}
