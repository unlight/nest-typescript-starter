import { Controller, Get, Req, Body, HttpStatus, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';
import { CatService } from './cat.service';
import { HttpException } from '@nestjs/core';
import { CreateCatDto } from './create-cat.dto';
import { Roles } from '../core/decorators/roles.decorator';
import { RolesGuard } from '../core/guards/roles.guard';
import { TransformInterceptor } from '../core/interceptors/transform.interceptor';

@Controller('/cat')
@UseGuards(RolesGuard)
@UseInterceptors(TransformInterceptor)
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
