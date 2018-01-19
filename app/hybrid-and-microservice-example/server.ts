import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { UseFilters } from '@nestjs/common';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { ExceptionFilter } from './common/filters/rpc-exception.filter';

// Microservice without http server.
// async function bootstrap() {
//     const app = await NestFactory.createMicroservice(ApplicationModule, { transport: Transport.TCP, port: 43210 });
//     app.useGlobalInterceptors(new LoggingInterceptor());
//     app.listen(() => console.log('Microservice is listening'));
// }

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    const microservice = app.connectMicroservice({ transport: Transport.TCP, port: 43210 });
    await app.startAllMicroservicesAsync();
    await app.listen(3000);
}
bootstrap();
