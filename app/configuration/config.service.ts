import { Component } from '@nestjs/common';
import * as convict from 'convict';

@Component()
export class ConfigService {

    private config: convict.Config = convict(`${__dirname}/schema.json5`);

    constructor() {
        this.config.validate();
    }

    get<T = any>(key: string) {
        const result: T = this.config.get(key);
        return result;
    }

}
