import { ReflectMetadata } from '@nestjs/common';

export const MetadataKey = 'script:name';

export const Name = (name: string) => ReflectMetadata(MetadataKey, name);
