import { Module } from '@nestjs/common';
import { Seed } from './seed';
import { Migrate } from './migrate';
import { Sync } from './sync';
import { DatabaseModule } from '../database.module';

@Module({
    imports: [
        DatabaseModule,
    ],
    providers: [
        Seed,
        Migrate,
        Sync,
    ],
})
export class ScriptsModule { }
