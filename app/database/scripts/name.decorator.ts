import { ReflectMetadata } from '@nestjs/common';

export const ScriptNameKey = 'script:name';

export const Name = (name: string) => ReflectMetadata(ScriptNameKey, name);
