import { ReflectMetadata } from '@nestjs/common';

// const editResource = ({user, resource}) => user.id === resource.insertUserId || user.role === 'ADMIN' ;

export function Access(checkAccess: (...args) => boolean) {
    return ReflectMetadata('access', checkAccess);
}
