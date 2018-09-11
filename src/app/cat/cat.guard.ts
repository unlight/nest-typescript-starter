import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';

@Injectable()
export class CatGuard implements CanActivate {

    constructor(
        private readonly reflector: Reflector,
    ) { }

    canActivate(context: ExecutionContext): boolean {
        const handler = context.getHandler();

        const access = this.reflector.get<Function>('access', handler);
        if (!access) {
            return true;
        }
        const req = context.switchToHttp().getRequest();
        return access({ user: req.user });
    }
}
