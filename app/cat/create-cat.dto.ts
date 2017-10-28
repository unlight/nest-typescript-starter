import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {

    @IsString()
    readonly name: string;
}
