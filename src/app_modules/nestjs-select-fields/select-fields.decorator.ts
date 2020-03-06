import { createParamDecorator } from '@nestjs/common';
import graphqlFields from 'graphql-fields';

export const SelectFields = createParamDecorator((data, [root, args, context, info]) => {
    const fields = graphqlFields(info);
    return Object.keys(fields).reduce((result, field) => {
        result[field] = true;
        return result;
    }, {});
});
