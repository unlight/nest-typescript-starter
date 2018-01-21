import { ReflectMetadata } from '@nestjs/common';

// const editResource = ({user, resource}) => user.id === resource.insertUserId || user.role === 'ADMIN' ;

export function Access (checkAccess: Function) {
    return ReflectMetadata('access', checkAccess);
}
