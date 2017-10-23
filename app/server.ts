import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { HttpExceptionFilter } from './exception-filters/http-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(bodyParser.json());
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(3000);
}
bootstrap();
