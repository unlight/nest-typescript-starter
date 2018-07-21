import { Get, Controller, Res, Body, HttpStatus, Req, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { User } from './common/decorators/user.decorator';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { of } from 'rxjs';

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
