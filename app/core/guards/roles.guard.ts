import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

@Guard()
export class RolesGuard implements CanActivate {

    constructor(
        private readonly reflector: Reflector,
    ) { }

    canActivate(req: Request, context: ExecutionContext): boolean {
        const { handler } = context;
        const roles = this.reflector.get<string[]>('roles', handler);
        if (!roles) {
            return true;
        }

        const user = (req as any).user;
        const hasRole = () => !!user.roles.find((role) => !!roles.find((item) => item === role));
        return user && user.roles && hasRole();
    }
}
