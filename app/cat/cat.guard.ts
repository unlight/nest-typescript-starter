import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';

@Injectable()
export class CatGuard implements CanActivate {

    constructor(
        private readonly reflector: Reflector,
    ) { }

    canActivate(req: Request, context: ExecutionContext): boolean {
        const { handler } = context;
        const access = this.reflector.get<any>('access', handler);
        if (!access) {
            return true;
        }
        const user = (req as any).user;
        return access({ user });
    }
}
