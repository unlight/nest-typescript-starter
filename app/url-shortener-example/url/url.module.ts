import { Module, Inject } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './url.entity';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Url])],
    controllers: [UrlController],
    components: [
        UrlService,
        { provide: 'converter', useFactory: () => require('convert-bases') },
    ],
})
export class UrlModule { }
