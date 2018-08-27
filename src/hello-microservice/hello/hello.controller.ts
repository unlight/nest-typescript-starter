import { Controller, Get } from '@nestjs/common';
import { Transport, Client, ClientProxy } from '@nestjs/microservices';

@Controller('hello')
export class HelloController {
    @Client({ transport: Transport.TCP, options: { port: 43210 } })
    client: NonNullable<ClientProxy>;

    @Get()
    async hello() {
        const reply: string = await this.client.send('service1', 'hello world').toPromise();
        return 'Hello world! ' + reply;
    }
}
