import { Controller, Get, Req, Body, HttpStatus, Post, UseGuards, UseInterceptors, UsePipes, Param, ParseIntPipe, UseFilters, Put, HttpException } from '@nestjs/common';
import { Request } from 'express';
import { CatService } from './cat.service';
import { CreateCatDto } from './create-cat.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Roles } from '../../components/roles.decorator';
import { RolesGuard } from '../../components/roles.guard';
import { ValidationPipe } from '../../components/validation.pipe';
import { HttpExceptionFilter } from '../../components/http-exception.filter';
import { User } from '../../components/user.decorator';
import { TransformInterceptor } from '../../components/transform.interceptor';

@Controller('/cats')
@UseGuards(RolesGuard)
@UseInterceptors(TransformInterceptor)
@UsePipes(ValidationPipe)
@UseFilters(HttpExceptionFilter)
export class CatController {

    constructor(
        private readonly catService: CatService,
    ) { }

    @Get('/')
    async cats() {
        return this.catService.findAll();
    }

    @Get('/get/:id')
    async cat(@Param('id', new ParseIntPipe()) id) {
        return { id };
    }

    @Post('/')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    async createCat(@Req() req: Request, @Body() body: CreateCatDto) {
        return this.catService.create(body);
    }

    @Get('/admin')
    @Roles('admin')
    async admin(@Req() req: Request) {
        return 'ok';
    }

    @Get('/unknown')
    async unknown() {
        throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

    @Put('/:id')
    async update(@Param('id') id: number, @User() user) {
        const cat = await this.catService.findOneById(id);
        // (global as any).checkPermission(user, 'cat.update', cat);
    }
}
