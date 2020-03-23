import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { logger: false });
    app.useLogger(app.get(Logger));
    app.useGlobalPipes(
        new ValidationPipe({
            validationError: {
                target: false,
            },
        }),
    );
    await app.listen(3000);
}
bootstrap();
