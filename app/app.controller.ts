import { Get, Controller, Res, Body, HttpStatus, UseFilters } from '@nestjs/common';
import { Response } from 'express';
import { ErrorExceptionFilter } from './core/filters/error-exception.filter';

@Controller()
@UseFilters(new ErrorExceptionFilter())
export class AppController {

    @Get()
    @UseFilters(new ErrorExceptionFilter())
    root(): string {
        return 'Hello World!';
    }

    @Get('/welcome')
    async welcome( @Res() res: Response, @Body() body: any) {
        res.status(HttpStatus.OK).json(['Hello world!']);
    }
}
