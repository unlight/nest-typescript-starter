import { Component } from '@nestjs/common';
import config = require('./app.config');

type AppConfig = typeof config;

@Component()
export class ConfigService {

    private config = config; // eslint-disable-line nestjs/use-dependency-injection

    get(): AppConfig;

    get<T = any>(key?: string, defaultValue?) {
        if (key === undefined) {
            return this.config;
        }
        let result = this.config[key];
        if (result === undefined) {
            result = defaultValue;
        }
        return result;
    }

}
