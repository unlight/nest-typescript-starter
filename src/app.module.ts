import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';

export async function graphqlModuleFactory(prismaService: PrismaService) {
    return {
        tracing: false,
        autoSchemaFile: '~schema.gql',
        context: () => ({ prisma: prismaService }),
    };
}

@Module({
    imports: [
        UserModule,
        PrismaModule,
        GraphQLModule.forRootAsync({
            imports: [PrismaModule],
            inject: [PrismaService],
            useFactory: graphqlModuleFactory,
        }),
    ],
    controllers: [AppController],
    providers: [
        { provide: AppService, useClass: AppService },
        { provide: AppResolver, useClass: AppResolver },
    ],
})
export class AppModule {}
