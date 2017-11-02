import { Controller, Get, Res, Req, Body, HttpStatus, Post, UseFilters, UseGuards } from '@nestjs/common';
import { Response, Request } from 'express';
import { CatService } from './cat.service';
import { HttpException } from '@nestjs/core';
import { CreateCatDto } from './create-cat.dto';
import { Roles } from '../core/decorators/roles.decorator';
import { RolesGuard } from '../core/guards/roles.guard';

@Controller('/cat')
@UseGuards(RolesGuard)
export class CatController {

    constructor(
        private readonly catService: CatService,
    ) { }

    @Get('/browse')
    async cats() {
        return this.catService.findAll();
    }

    @Post('/')
    async createCat( @Req() req: Request, @Body() body: CreateCatDto) {
        return this.catService.create(body);
    }

    @Get('/admin')
    @Roles('admin')
    async admin( @Req() req: Request) {
        return 'ok';
    }

    @Get('/unknown')
    async unknown() {
        throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }
}
