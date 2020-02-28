import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        UserModule,
        PrismaModule,
        GraphQLModule.forRootAsync({
            useFactory: async () => {
                return {
                    autoSchemaFile: '~schema.gql',
                };
            },
        }),
    ],
    controllers: [AppController],
    providers: [
        { provide: AppService, useClass: AppService },
        { provide: AppResolver, useClass: AppResolver },
    ],
})
export class AppModule {}
