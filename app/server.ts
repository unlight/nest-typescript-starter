import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UnauthorizedErrorFilter } from './core/filters/unauthorized-error.filter';
// import { RolesGuard } from './core/guards/roles.guard';
import config = require('./app.config');

// TODO: For dev only.
import 'loud-rejection/register';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(bodyParser.json());
    // app.useGlobalFilters(new UnauthorizedErrorFilter());

    const options = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api', app, document);

    await app.listen(config.port);
}

bootstrap();
