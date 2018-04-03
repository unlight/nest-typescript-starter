import { Controller, Get, Post } from '@nestjs/common';
import { UrlService } from './url.service';

@Controller()
export class UrlController {

    constructor(
        private urlService: UrlService,
    ) {    }

    @Post('create')
    async create(url: string) {
        // TODO: Add validation
        return this.urlService.save();
    }

    @Get('all')
    all() {
        return this.urlService.getAll();
    }
}
