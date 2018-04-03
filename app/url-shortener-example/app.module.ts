import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './app.config';
import { UrlModule } from './url/url.module';
import { Url } from './url/url.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...config.get('typeorm'),
            entities: ['./**/*.entity.ts'],
            subscribers: ['./**/*.subscriber.ts'],
        }),
        UrlModule,
    ],
    controllers: [AppController],
})
export class AppModule implements NestModule { }
