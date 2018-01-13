import { Controller } from '@nestjs/common';
import { MessagePattern, Client, ClientProxy, Transport } from '@nestjs/microservices';

@Controller()
export class Service1Controller {
    @Client({transport: Transport.TCP, port: 43210})
    client: ClientProxy;

    @MessagePattern('service1')
    async doit(data: string) {
        console.log('Service 1: got ', data);
        const service2Reply = await this.client.send('service2', 'hello from service 1').toPromise();
        console.log('Service 1: reply from service2', service2Reply);
        return service2Reply;
    }
}
