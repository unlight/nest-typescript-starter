import { Entity, ObjectIdColumn, Column, BeforeInsert } from 'typeorm';
import { use, MixinDecorator, classes } from '../lib/mixin';
import { HistoryBehaviour} from '../common/history.behaviour';

@Entity()
export class Url extends HistoryBehaviour() {

    @ObjectIdColumn()
    _id: number;

    @Column({ type: 'text' })
    url: string;

    // @Column({ type: 'date' })
    // dateInserted: Date;

    // @BeforeInsert()
    // beforeInsert() {
    //     this.dateInserted = new Date();
    // }

}
