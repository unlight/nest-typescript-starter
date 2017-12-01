import { Entity, Column, ObjectIdColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Cat {

    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    id: number;

    @Column({ length: 20 })
    name: string;

    @Column()
    birthDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}
