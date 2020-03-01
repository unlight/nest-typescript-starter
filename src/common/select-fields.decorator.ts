import { createParamDecorator } from '@nestjs/common';
import getFieldNames from 'graphql-list-fields';

export const SelectFields = createParamDecorator((data, [root, args, context, info]) => {
    const names = getFieldNames(info);
    return names.reduce((result, field) => {
        result[field] = true;
        return result;
    }, {});
});
