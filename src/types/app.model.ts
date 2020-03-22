import { Field, ObjectType } from 'type-graphql';

@ObjectType('App')
export class AppModel {
    @Field(() => String, { nullable: false })
    version: string;
}
