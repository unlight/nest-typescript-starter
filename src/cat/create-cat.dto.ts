import { IsString, MaxLength, IsNotEmpty, IsOptional, IsDateString, IsDate, Validate, IsISO8601 } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { CustomTextLength } from './validators/custom-text-length';

export class CreateCatDto {

    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    @Validate(CustomTextLength)
    readonly name: string;

    @ApiModelProperty()
    @ApiModelPropertyOptional()
    @IsOptional()
    @IsISO8601()
    readonly birthDate: string;
}
