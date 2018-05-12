import { Module } from '@nestjs/common';
import { Service1Controller } from './service1.controller';

@Module({
    controllers: [Service1Controller],
})
export class Service1Module {}
