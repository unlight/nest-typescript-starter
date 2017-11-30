import { Entity, Column, ObjectIdColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Cat {

    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    id: number;

    @Column({ length: 250 })
    name: string;

    @UpdateDateColumn()
    updatedDate: Date;
}
