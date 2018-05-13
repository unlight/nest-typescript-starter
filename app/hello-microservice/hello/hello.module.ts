
import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';

@Module({
    controllers: [HelloController],
    providers: [],
})
export class HelloModule {}
