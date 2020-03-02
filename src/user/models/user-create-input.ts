import { InputType, Field, ObjectType, ID } from 'type-graphql';

@InputType()
export class UserCreateInput {
    @Field(_type => ID)
    id?: string | null;

    @Field(_type => Date, {
        nullable: true,
    })
    createdAt?: Date | null;

    @Field(_type => String, {
        nullable: false,
    })
    email!: string;

    @Field(_type => String, {
        nullable: true,
    })
    name?: string | null;
}
