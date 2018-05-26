import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { CatController } from './cat/cat.controller';
import { LoggerMiddleware } from './core/middlewares/logger.middleware';
import { AppController } from './app.controller';
import { JwtMiddleware } from './core/middlewares/jwt.middleware';
import { DatabaseModule } from './database/database.module';
import { AppGraphQLModule } from './app.graphql.module';
import { ConfigService } from './app.config.service';
import { config } from './app.config';

@Module({
    controllers: [AppController],
    imports: [
        CatModule,
        DatabaseModule,
        AppGraphQLModule,
    ],
    providers: [
        { provide: ConfigService, useFactory: () => new ConfigService(config) },
    ],
})
export class AppModule implements NestModule {

    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes('/welcome');
        consumer.apply(LoggerMiddleware).forRoutes(CatController);
        consumer.apply(JwtMiddleware).forRoutes('/jwt');
    }
}
