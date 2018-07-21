import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { CatController } from './cat/cat.controller';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { AppController } from './app.controller';
import { JwtMiddleware } from './common/middlewares/jwt.middleware';
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
        { provide: ConfigService, useValue: new ConfigService(config) },
    ],
})
export class AppModule implements NestModule {

    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes('/welcome');
        consumer.apply(LoggerMiddleware).forRoutes(CatController);
        consumer.apply(JwtMiddleware).forRoutes('/jwt');
    }
}
