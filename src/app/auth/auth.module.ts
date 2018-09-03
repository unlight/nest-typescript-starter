import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { config } from '../../config';

@Module({
    imports: [
        JwtModule.register({ secretOrPrivateKey: config.get('secretOrPrivateKey') }),
    ],
    providers: [],
})
export class AuthModule { }
