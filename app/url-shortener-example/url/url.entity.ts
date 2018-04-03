import { Entity, ObjectIdColumn, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Url {

    @ObjectIdColumn()
    _id: number;

    @Column({ type: 'text' })
    url: string;

    @Column({ type: 'text' })
    hash: string;

    @Column({ type: 'date' })
    dateInserted: Date;
}
