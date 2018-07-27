import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CatModule } from './cat/cat.module';
import { AppGraphQLModule } from './app.graphql.module';
import { config } from '../config';
import { ConfigService } from './config.service';
import { LoggerMiddleware } from '../components/logger.middleware';
import { CatController } from './cat/cat.controller';

@Module({
    controllers: [AppController],
    imports: [
        CatModule,
        AppGraphQLModule,
        // provides: typeorm/Connection, typeorm/EntityManager
        TypeOrmModule.forRoot({
            keepConnectionAlive: true,
            ...config.get<any>('typeorm'),
        }),
    ],
    providers: [
        { provide: ConfigService, useValue: new ConfigService(config) },
    ],
})
export class AppModule implements NestModule {

    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes(CatController);
    }
}
