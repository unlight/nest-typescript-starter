import { NestFactory, Reflector } from '@nestjs/core';
import { ScriptsModule, ScriptRefList } from './scripts/scripts.module';
import { MetadataKey as ScriptName } from './scripts/name.decorator';
import yargs = require('yargs');

interface IScript {
    run(): void;
}

(async function main() {
    try {
        const context = await NestFactory.createApplicationContext(ScriptsModule);
        const names = yargs.argv._;
        const reflector = context.get(Reflector);
        const scriptList: any[] = context.get(ScriptRefList);
        const scripts = scriptList
            .filter(ref => names.includes(reflector.get(ScriptName, ref)))
            .map(ref => context.get<IScript>(ref));
        scripts.reduce((p, script) => p.then(() => script.run()), Promise.resolve());
    } catch (err) {
        console.error(err);
    }
})();
