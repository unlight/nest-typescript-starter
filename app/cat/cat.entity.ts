import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;
}
