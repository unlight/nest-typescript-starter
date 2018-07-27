import { Get, Controller, Res, Body, HttpStatus, Req, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { TransformInterceptor } from '../components/transform.interceptor';

@Controller()
@UseInterceptors(TransformInterceptor)
export class AppController {

    @Get()
    root(): string {
        return 'Hello World!';
    }

    @Get('welcome')
    async welcome( @Res() res: Response, @Body() body: any) {
        res.status(HttpStatus.OK).json(['Hello world!']);
    }

}
