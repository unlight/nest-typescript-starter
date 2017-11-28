import { NestFactory } from '@nestjs/core';
import { ScriptsModule } from './scripts/scripts.module';
import { Connection } from 'typeorm';
import { DatabaseModule } from './database/database.module';

(async function main() {
    try {
        const context = await NestFactory.createApplicationContext(ScriptsModule);
    } catch (err) {
        console.error(err);
    }
})();
