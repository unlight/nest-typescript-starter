import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { logger: false });
    const logger = app.get(Logger);
    const config = app.get(ConfigService);
    app.useLogger(logger);
    app.useGlobalPipes(
        new ValidationPipe({
            validationError: {
                target: false,
            },
        }),
    );
    const port = config.get('port', 3000);
    await app.listen(port);
    logger.log('Server is launched on port %o', 'bootstrap', port);
}
bootstrap();
