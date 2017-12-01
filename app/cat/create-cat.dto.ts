import { IsString, MaxLength, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateCatDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    readonly name: string;

    @IsOptional()
    @IsDateString()
    readonly birthDate: string;
}
