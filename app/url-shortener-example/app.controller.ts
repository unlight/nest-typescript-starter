import { Get, Controller } from '@nestjs/common';
import { Connection } from 'typeorm';

@Controller()
export class AppController {

    constructor(
        private connection: Connection,
    ) { }

    @Get('health')
    health() {
        debugger;
        return 'unknown';
    }
}
