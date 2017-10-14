import { Controller, Get, Res, Req, Body, HttpStatus, Post  } from '@nestjs/common';
import { Response, Request } from 'express';
import { CatService } from './cat.service';

@Controller('/cat')
export class CatController {

    constructor(
        private readonly catService: CatService,
    ) { }

    @Get('/browse')
    async cats() {
        return this.catService.findAll();
    }

    @Post('/')
    async createCat(@Req() req: Request, @Body() body: any) {
        debugger;
        return this.catService.create(body);
    }
}
