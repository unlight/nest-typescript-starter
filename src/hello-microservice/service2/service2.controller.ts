import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class Service2Controller {
    @MessagePattern('service2')
    doit(data: string) {
        console.log('Service 2: got ', data);
        return 'done from service 2';
    }
}
