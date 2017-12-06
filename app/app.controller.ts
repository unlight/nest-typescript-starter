import { Get, Controller, Res, Body, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {

    @Get()
    root(): string {
        return 'Hello World!';
    }

    @Get('/welcome')
    async welcome( @Res() res: Response, @Body() body: any) {
        res.status(HttpStatus.OK).json(['Hello world!']);
    }
}
