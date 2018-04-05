import { Controller, Get, Post, Inject, Param, NotFoundException, Res, Body, Req } from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';
import { Url } from './url.entity';

@Controller()
export class UrlController {

    constructor(
        private urlService: UrlService,
        @Inject('converter') private readonly converter: any,
    ) { }

    @Post('shorten')
    async shorten(@Body() url: string) {
        // TODO: Add validation.
        const entity = await this.urlService.create(url);
        const hash = this.converter.encode(entity._id);
        return { hash, url };
    }

    @Get('test')
    test() {
        const url = new Url();
        return url;
    }

    @Get(':hash')
    async hash(@Param('hash') hash: string, @Res() res: Response) {
        const id = this.converter.decode(hash);
        const entity = await this.urlService.getById(id);
        if (!entity) {
            throw new NotFoundException();
        }
        res.status(301).json({ url: entity.url });
    }
}
