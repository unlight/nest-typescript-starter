import { Component } from '@nestjs/common';
import config = require('./app.config');

@Component()
export class ConfigService {

    private config = config;

    get<T = any>(key: string, defaultValue?) {
        let result = this.config[key];
        if (result === undefined) {
            result = defaultValue;
        }
        return result;
    }

}
