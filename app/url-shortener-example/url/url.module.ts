import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './url.entity';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Url])],
    controllers: [UrlController],
    components: [UrlService],
})
export class UrlModule { }
