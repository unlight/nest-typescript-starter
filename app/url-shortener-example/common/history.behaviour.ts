import { BeforeInsert, Column } from 'typeorm';

export const HistoryBehaviour = (Class?) => {
    if (!Class) {
        Class = class { };
    }
    return class extends Class {

        @Column({ type: 'date' })
        dateInserted: Date;

        @BeforeInsert()
        private beforeInsert() {
            this.dateInserted = new Date();
        }

    }
};

// export class HistoryBehaviour {

//     @Column({ type: 'date' })
//     dateInserted: Date;

//     @BeforeInsert()
//     private beforeInsert() {
//         this.dateInserted = new Date();
//     }
// }

// export class HistoryBehaviour2 {

//     @Column({ type: 'date' })
//     dateInserted2: Date;

//     @BeforeInsert()
//     private beforeInsert() {
//         this.dateInserted2 = new Date();
//     }
// }

// export class HistoryBehaviourMix extends Mixin {

//     @Column({ type: 'date' })
//     dateInserted: Date;

//     @BeforeInsert()
//     private beforeInsert() {
//         this.dateInserted = new Date();
//     }
// }

// let M = (base) => class extends base {
//   field = 'abc';

//   constructor() {
//     super();
//     // ...
//   }

//   method() {
//     super.method();
//     // ...
//   }
// }
