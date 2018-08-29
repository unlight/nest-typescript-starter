import { Injectable } from '@nestjs/common';
import * as convict from 'convict';
import { Config } from '../config';

@Injectable()
export class ConfigService {

    readonly get: Config['get'] = this.config.get;

    constructor(
        private readonly config: Config,
    ) { }
}
