import { Controller, Get, Res, Req, Body, HttpStatus, Post, UseFilters } from '@nestjs/common';
import { Response, Request } from 'express';
import { CatService } from './cat.service';
import { HttpException } from '@nestjs/core';
import { CreateCatDto } from './create-cat.dto';

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
    async createCat(@Req() req: Request, @Body() body: CreateCatDto) {
        return this.catService.create(body);
    }

    @Get('/unknown')
    async unknown() {
        throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }
}
