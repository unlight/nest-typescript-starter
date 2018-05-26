import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cat.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Cat]),
    ],
    controllers: [
        CatController,
    ],
    providers: [
        CatService,
    ],
})
export class CatModule { }
