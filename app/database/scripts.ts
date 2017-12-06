import { NestFactory, Reflector } from '@nestjs/core';
import { ScriptsModule, ScriptRefList } from './scripts/scripts.module';
import { ScriptNameKey } from './scripts/name.decorator';
import { Arguments } from 'yargs';
import yargs = require('yargs');

export interface IScript {
    run(argv: Arguments): void;
}

(async function main() {
    try {
        const context = await NestFactory.createApplicationContext(ScriptsModule);
        const names = yargs.argv._;
        const reflector = context.get(Reflector);
        const scriptList: any[] = context.get(ScriptRefList);
        const scripts = scriptList
            .filter(ref => names.includes(reflector.get(ScriptNameKey, ref)))
            .map(ref => context.get<IScript>(ref));
        scripts.reduce((p, script) => p.then(() => script.run(yargs.argv)), Promise.resolve());
    } catch (err) {
        console.error(err);
    }
})();
