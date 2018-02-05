import { Component } from '@nestjs/common';
import * as convict from 'convict';
import { config } from './app.config';

@Component()
export class ConfigService {

    private config: convict.Config = config; // eslint-disable-line nestjs/use-dependency-injection

    get<T = any>(key: string): T {
        return this.config.get(key);
    }
}
