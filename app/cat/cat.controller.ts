import { Controller, Get, Req, Body, HttpStatus, Post, UseGuards, UseInterceptors, UsePipes, Param, ParseIntPipe, UseFilters, Put } from '@nestjs/common';
import { Request } from 'express';
import { CatService } from './cat.service';
import { HttpException } from '@nestjs/core';
import { CreateCatDto } from './create-cat.dto';
import { Roles } from '../core/decorators/roles.decorator';
import { RolesGuard } from '../core/guards/roles.guard';
import { TransformInterceptor } from '../core/interceptors/transform.interceptor';
import { ValidationPipe } from '../core/pipes/validation.pipe';
import { ApiResponse } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../core/filters/http-exception.filter';
import { Access } from '../core/decorators/access';
import { User } from '../core/decorators/user.decorator'; // eslint-disable-line import/max-dependencies

@Controller('/cat')
@UseGuards(RolesGuard)
// @UseGuards(CatGuard)
@UseInterceptors(TransformInterceptor)
@UsePipes(new ValidationPipe())
@UseFilters(new HttpExceptionFilter())
export class CatController {

    constructor(
        private readonly catService: CatService,
    ) { }

    @Get('/browse')
    async cats() {
        return this.catService.findAll();
    }

    @Get('/get/:id')
    async cat( @Param('id', new ParseIntPipe()) id) {
        return { id };
    }

    @Post('/')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
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

    @Put('/:id')
    async update(@Param('id') id, @User() user) {
        const cat = await this.catService.findOneById(id);
        // (global as any).checkPermission(user, 'cat.update', cat);
    }
}
