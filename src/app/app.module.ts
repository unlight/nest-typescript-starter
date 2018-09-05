import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CatModule } from './cat/cat.module';
import { config } from '../config';
import { ConfigService } from './config.service';
import { LoggerMiddleware } from '../components/logger.middleware';
import { CatController } from './cat/cat.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { PostModule } from './post/post.module';
import { AuthorModule } from './author/author.module';

@Module({
    controllers: [AppController],
    imports: [
        CatModule,
        PostModule,
        AuthorModule,
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
        }),
        // provides: typeorm/Connection, typeorm/EntityManager
        TypeOrmModule.forRoot(config.get<any>('typeorm')),
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
