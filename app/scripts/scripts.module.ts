import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NestFactory } from '@nestjs/core';

@Module({
    modules: [DatabaseModule],
})
export class ScriptsModule {}
