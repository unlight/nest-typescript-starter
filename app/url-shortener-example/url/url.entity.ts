import { Entity, ObjectIdColumn, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Url {

    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    url: string;

    @Column({ type: 'date' })
    dateInserted: Date;
}
