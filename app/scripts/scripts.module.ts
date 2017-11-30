import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { Seed } from './seed';
import { Migrate } from './migrate';

const scriptRefList = [
    Seed,
    Migrate,
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
