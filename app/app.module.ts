import { Module } from '@nestjs/common';
import { HomeController } from './home/home.controller';

@Module({
    modules: [],
    controllers: [HomeController],
})
export class ApplicationModule { }
