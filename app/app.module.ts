import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { HomeModule } from './home/home.module';
import { CatModule } from './cat/cat.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { CatController } from './cat/cat.controller';

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

