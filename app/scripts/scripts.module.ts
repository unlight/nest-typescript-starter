import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { Seed } from './seed';
import { Migrate } from './migrate';
import { Sync } from './sync';
// import { Migration } from './migration';

const scriptRefList = [
    Seed,
    Migrate,
    Sync,
    // Migration,
];

export const ScriptRefList = 'ScriptRefList';

@Module({
    modules: [DatabaseModule],
    components: [
        ...scriptRefList,
        { provide: ScriptRefList, useValue: scriptRefList },
    ],
})
export class ScriptsModule { }
