import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Cat {

    @ObjectIdColumn()
    id: number;

    @Column({ length: 250 })
    name: string;
}
