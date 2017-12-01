import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
// import { RolesGuard } from './core/guards/roles.guard';
import config = require('./app.config');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(bodyParser.json());
    // app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(config.port);
}
bootstrap();
