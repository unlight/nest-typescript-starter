import { Module } from '@nestjs/common';
import { Service2Controller } from './service2.controller';

@Module({
    controllers: [Service2Controller],
})
export class Service2Module {}
