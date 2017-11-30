import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { TransformObjectPipe } from './core/pipes/transform-object.pipe';
import { HttpExceptionFilter } from './core/filters/http-exception.filter';
// import { RolesGuard } from './core/guards/roles.guard';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(bodyParser.json());
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalPipes(new TransformObjectPipe());
    await app.listen(3000);
}
bootstrap();
