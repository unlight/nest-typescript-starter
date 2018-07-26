import { Get, Controller, Res, Body, HttpStatus, Req, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { of } from 'rxjs';
import { User } from '../components/user.decorator';
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

    @Get('jwt')
    @UseInterceptors(TransformInterceptor)
    async jwt(@Req() req: any, @User() user: any) {
        return req.user === user;
    }

    @Get('obs')
    obs() {
        return of('obs');
    }
}
