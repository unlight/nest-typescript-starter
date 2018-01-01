import { Module } from '@nestjs/common';
import { catProviders } from './cat.providers';
import { CatService } from './cat.service';
import { DatabaseModule } from '../database/database.module';
import { CatController } from './cat.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [CatController],
    components: [
        ...catProviders,
        CatService,
    ],
})
export class CatModule { }
