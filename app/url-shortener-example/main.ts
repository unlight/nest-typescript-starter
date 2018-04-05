import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './app.config';
import 'loud-rejection/register';
import * as bodyParser from 'body-parser';

async function main() {
    const app = await NestFactory.create(AppModule);
    app.use(bodyParser.json({ strict: false }));
    await app.listen(config.get('port'));
}

main();
