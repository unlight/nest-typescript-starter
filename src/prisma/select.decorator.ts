import { createParamDecorator } from '@nestjs/common';
import { infoToPhotonSelect } from 'graphql-info-transformer';

/**
 * Transform GraphQL's info into an object that can be consumed by Prisma's client
 */
export const Select = createParamDecorator((data, [root, args, context, info]) => {
    return infoToPhotonSelect(info);
});
