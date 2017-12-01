import { PipeTransform, Pipe, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Pipe()
export class ValidationPipe implements PipeTransform<any> {

    async transform(value: any, metadata: ArgumentMetadata) {
        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = plainToClass(metatype, value);
        const errors = await validate(object, { validationError: { target: false } });
        if (errors.length > 0) {
            throw new BadRequestException(errors);
        }
        return object;
    }

    private toValidate(metatype: any): boolean {
        return ![String, Boolean, Number, Array, Object].includes(metatype);
    }
}
