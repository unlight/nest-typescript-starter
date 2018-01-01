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

export const ScriptRefList = 'ScriptRefList';

@Module({
    imports: [DatabaseModule],
    components: [
        ...scriptRefList,
        { provide: ScriptRefList, useValue: scriptRefList },
    ],
})
export class ScriptsModule { }
