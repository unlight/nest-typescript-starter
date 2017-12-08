import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { CatController } from './cat/cat.controller';
import { LoggerMiddleware } from './core/middlewares/logger.middleware';
import { AppController } from './app.controller';
import { errorMiddleware } from './core/middlewares/error.middleware';

@Module({
    controllers: [AppController],
    modules: [
        CatModule,
    ],
})
export class AppModule implements NestModule {

    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes(
            { path: '/welcome', method: RequestMethod.ALL },
        );
        consumer.apply(LoggerMiddleware).forRoutes(CatController);

        consumer.apply(errorMiddleware).forRoutes(AppController);
    }
}
