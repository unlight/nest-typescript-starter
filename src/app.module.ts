import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
        LoggerModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    pinoHttp: {
                        useLevel: 'trace',
                        level: config.get('production') ? 'warn' : 'info',
                        prettyPrint: !config.get('production'),
                    },
                };
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
