import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CatModule } from './cat/cat.module';
import { config } from '../config';
import { ConfigService } from './config.service';
import { LoggerMiddleware } from '../components/logger.middleware';
import { CatController } from './cat/cat.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './posts/posts.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
    controllers: [AppController],
    imports: [
        CatModule,
        PostsModule,
        AuthorsModule,
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
        }),
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
