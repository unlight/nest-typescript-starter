import { Module } from '@nestjs/common';
import { Seed } from './seed';
import { Migrate } from './migrate';
import { Sync } from './sync';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config';
import { Arguments } from 'yargs';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...config.get<any>('typeorm'),
            migrations: [`src/migrations/*.{ts,js}`],
            entities: ['src/app/**/*.entity.{ts,js}'],
        }),
    ],
    providers: [
        Seed,
        Migrate,
        Sync,
    ],
})
export class ScriptsModule { }

export interface IScript {
    run(argv: Arguments): Promise<void>;
}
