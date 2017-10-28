import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { HomeModule } from './home/home.module';
import { CatModule } from './cat/cat.module';
import { CatController } from './cat/cat.controller';
import { LoggerMiddleware } from './core/middlewares/logger.middleware';

@Module({
    modules: [
        HomeModule,
        CatModule,
    ],
})
export class AppModule implements NestModule {

    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes(
            { path: '/welcome', method: RequestMethod.ALL },
        );
        consumer.apply(LoggerMiddleware).forRoutes(CatController);
    }
}
