import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class UserCreateInput {
    @IsEmail()
    @Field((_type) => String, { nullable: false })
    email: string;

    @IsNotEmpty()
    @MinLength(3)
    @Field((_type) => String, { nullable: false })
    name: string;
}
