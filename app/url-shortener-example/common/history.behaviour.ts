import { BeforeInsert, Column } from 'typeorm';

export const HistoryBehaviour = (Class?) => {
    if (!Class) {
        Class = class { };
    }
    class History extends Class { // eslint-disable-line tslint/config

        @Column({ type: 'date' })
        dateInserted: Date;

        @BeforeInsert()
        beforeInsert() {
            this.dateInserted = new Date();
        }

    }
    return History;
};
