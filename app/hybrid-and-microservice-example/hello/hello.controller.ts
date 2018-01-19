import { Controller, Get } from '@nestjs/common';
import { Transport, Client, ClientProxy } from '@nestjs/microservices';

@Controller('hello')
export class HelloController {
    @Client({transport: Transport.TCP, port: 43210})
    client: ClientProxy;

    @Get()
    async hello() {
        const reply = await this.client.send('service1', 'hello world').toPromise();
        return 'Hello world! ' + reply;
    }
}
