import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { CatController } from './cat/cat.controller';
import { LoggerMiddleware } from './core/middlewares/logger.middleware';
import { AppController } from './app.controller';
import { ConfigService } from './app.config.service';
import { JwtMiddleware } from './core/middlewares/jwt.middleware';
import { DatabaseModule } from './database/database.module';
import { GraphQLApiModule } from './graphql-api.module';

@Module({
    controllers: [AppController],
    imports: [
        CatModule,
        DatabaseModule,
        GraphQLApiModule,
    ],
    components: [
        ConfigService,
    ],
    exports: [
        ConfigService,
    ],
})
export class AppModule implements NestModule {

    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes(
            { path: '/welcome', method: RequestMethod.ALL },
        );
        consumer.apply(LoggerMiddleware).forRoutes(CatController);
        consumer.apply(JwtMiddleware).forRoutes(
            { path: '/jwt', method: RequestMethod.ALL },
        );
    }
}
