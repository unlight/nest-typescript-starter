import { Controller, Get, Res, Req, Body, HttpStatus, Post  } from '@nestjs/common';
import { Response, Request } from 'express';
import { CatService } from './cat.service';
import { CreateCatDTO } from './create-cat-dto';

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
    async createCat(@Req() req: Request, @Body() body: CreateCatDTO) {
        return this.catService.create(body);
    }
}
