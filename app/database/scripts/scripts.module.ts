import { Module } from '@nestjs/common';
import { Seed } from './seed';
import { Migrate } from './migrate';
import { Sync } from './sync';
import { DatabaseModule } from '../database.module';
// import { Migration } from './migration';

const scriptRefList = [
    Seed,
    Migrate,
    Sync,
    // Migration,
];

@Module({
    imports: [
        DatabaseModule,
    ],
    components: [
        ...scriptRefList,
    ],
})
export class ScriptsModule { }
