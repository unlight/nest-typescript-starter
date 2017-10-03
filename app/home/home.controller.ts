import { Controller, Get, Res, Req, Body, HttpStatus } from '@nestjs/common';
import { Response, Request } from 'express';
import { HomeService } from './home.service';


@Controller('/')
export class HomeController {

    constructor(
        private readonly homeService: HomeService,
    ) { }

    @Get('/welcome')
    async welcome( @Res() res: Response, @Body() body: any) {
        res.status(HttpStatus.OK).json(['Hello', 'world!']);
    }

    @Get('/welcome/:name')
    async welcomeUser( @Req() req: Request, @Res() res: Response, @Body() body: any) {
        const { name } = req.params;
        res.status(HttpStatus.OK).json(['Hello', name]);
    }

    @Get('/cats')
    async cats() {
        return this.homeService.findAll();
    }

}
