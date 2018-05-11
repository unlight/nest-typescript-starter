import { Injectable } from '@nestjs/common';
import * as convict from 'convict';
import { config, Config } from './app.config';

@Injectable()
export class ConfigService {

    private config: convict.Config<Config> = config; // eslint-disable-line nestjs/use-dependency-injection

    get<T = any>(key: string): T {
        return this.config.get(key);
    }
}
