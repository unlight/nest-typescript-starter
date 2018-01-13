import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    const microservice = app.connectMicroservice({
        transport: Transport.TCP,
        port: 43210,
    });

    await app.startAllMicroservicesAsync();
    await app.listen(3000);
}
bootstrap();
