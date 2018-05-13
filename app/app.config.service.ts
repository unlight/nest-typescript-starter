import { Injectable } from '@nestjs/common';
import * as convict from 'convict';
import { Config } from './app.config';

@Injectable()
export class ConfigService {

    constructor(
        private config: convict.Config<Config>
    ) { }

    get<T = any>(key: string): T {
        return this.config.get(key);
    }
}
