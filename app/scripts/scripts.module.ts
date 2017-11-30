import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { Seed } from './seed';

const scriptRefList = [
    Seed,
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
