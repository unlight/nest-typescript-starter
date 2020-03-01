import { createParamDecorator } from '@nestjs/common';
import getFieldNames from 'graphql-list-fields';

export const SelectFields = createParamDecorator((data, [root, args, ctx, info]) => {
    const names = getFieldNames(info);
    const result = names.reduce((result, field) => {
        result[field] = true;
        return result;
    }, {});
    return result;
});
