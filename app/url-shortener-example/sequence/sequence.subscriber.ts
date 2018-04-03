import { Sequence } from './sequence.entity';
import { EventSubscriber, EntitySubscriberInterface, InsertEvent, getMongoManager, MongoEntityManager } from 'typeorm';
import { MongoDriver } from 'typeorm/browser/driver/mongodb/MongoDriver';
// const { ObjectID } = require('mongodb');

@EventSubscriber()
export class SequenceSubscriber implements EntitySubscriberInterface {

    async beforeInsert(event: InsertEvent<Function>) {
        const sequenceRepository = event.connection.getMongoRepository(Sequence);
        const result = await sequenceRepository.findOneAndUpdate({}, { $inc: { value: 1 } }, { upsert: true, returnOriginal: false });
        const id = (result.value as Sequence).value;
        event.entity['_id'] = id;
    }
}
