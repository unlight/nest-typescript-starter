import { PipeTransform, Pipe, ArgumentMetadata, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { HttpException } from '@nestjs/core';


@Pipe()
export class TransformObjectPipe implements PipeTransform<any> {
    async transform(value, metadata: ArgumentMetadata) {
        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = plainToClass(metatype, value);
        const errors = await validate(object);
        if (errors.length > 0) {
            throw new HttpException('Validation failed', HttpStatus.BAD_REQUEST);
        }
        return object;
    }

    private toValidate(type): boolean {
        return ![String, Boolean, Number, Array, Object].includes(type);
    }
}
