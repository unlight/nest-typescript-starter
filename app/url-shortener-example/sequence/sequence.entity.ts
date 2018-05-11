import { Entity, ObjectIdColumn, Column, PrimaryColumn, ObjectID, BeforeInsert } from 'typeorm';

@Entity()
export class Sequence {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    value: number;
}
