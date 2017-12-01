import { IsString, MaxLength, IsInt, IsNotEmpty, IsPositive, IsOptional } from 'class-validator';

export class CreateCatDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    readonly name: string;

    @IsOptional()
    @IsInt()
    @IsPositive()
    readonly age: number;
}
