import { Controller, Get } from '@nestjs/common';
import { UrlService } from './url.service';

@Controller()
export class UrlController {

    constructor(
        private urlService: UrlService,
    ) {
    }

    @Get('all')
    all() {
        return this.urlService.getAll();
    }
}
