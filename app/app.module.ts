import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module';
import { CatModule } from './cat/cat.module';

@Module({
    modules: [
        HomeModule,
        CatModule,
    ],
})
export class AppModule { }
