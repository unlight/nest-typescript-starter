import { User as UserModel } from '@generated/type-graphql/models/User';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({})
export class User extends UserModel {
    @Field((_type) => ID, {
        nullable: false,
        description: undefined,
    })
    id: string;
}
