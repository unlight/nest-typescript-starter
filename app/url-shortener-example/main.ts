import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './app.config';
import 'loud-rejection/register';

async function main() {
    const app = await NestFactory.create(AppModule);
    await app.listen(config.get('port'));
}

main();
