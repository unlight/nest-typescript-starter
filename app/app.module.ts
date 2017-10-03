import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module';

@Module({
    modules: [HomeModule],
})
export class AppModule { }
