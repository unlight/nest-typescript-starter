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
        const [name] = yargs.argv._;
        const reflector = context.get(Reflector);
        const scriptList: any[] = context.get(ScriptRefList);
        const scriptRef = scriptList.find(ref => reflector.get(ScriptName, ref) === name);
        if (!scriptRef) {
            throw new Error(`Script '${name}' was not found.`);
        }
        const script = context.get<IScript>(scriptRef);
        await script.run();
    } catch (err) {
        console.error(err);
    }
})();
