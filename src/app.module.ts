import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { LoggerModule } from 'nestjs-pino';

import { config } from './app.config';
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
        // formatError: null as any,
    };
}

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env'],
            load: [config],
        }),
        LoggerModule.forRoot({
            pinoHttp: {
                level: process.env.NODE_ENV === 'production' ? 'warn' : 'info',
                prettyPrint: process.env.NODE_ENV !== 'production',
            },
        }),
        UserModule,
        PrismaModule,
        GraphQLModule.forRootAsync({
            imports: [PrismaModule],
            inject: [PrismaService],
            useFactory: graphqlModuleFactory,
        }),
    ],
    providers: [
        { provide: AppService, useClass: AppService },
        { provide: AppResolver, useClass: AppResolver },
    ],
})
export class AppModule {}
