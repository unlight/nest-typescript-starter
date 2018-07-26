import { Injectable } from '@nestjs/common';
import * as convict from 'convict';
import { Config } from '../config';

@Injectable()
export class ConfigService {

    constructor(
        private readonly config: Config,
    ) { }

    readonly get: Config['get'] = this.config.get;
}
