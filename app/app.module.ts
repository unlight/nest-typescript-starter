import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { CatController } from './cat/cat.controller';
import { LoggerMiddleware } from './core/middlewares/logger.middleware';
import { AppController } from './app.controller';
import { ConfigService } from './app.config.service';
import { JwtMiddleware } from './core/middlewares/jwt.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import config = require('./app.config');

@Module({
    controllers: [AppController],
    imports: [
        // provides: typeorm/Connection, typeorm/EntityManager
        TypeOrmModule.forRoot(config.connection),
        CatModule,
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
