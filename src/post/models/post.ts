import { Post as PostModel } from '@generated/type-graphql/models/Post';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Post extends PostModel {
    @Field(_type => ID)
    id!: string;
}
