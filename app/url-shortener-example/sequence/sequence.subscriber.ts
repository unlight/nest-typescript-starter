import { Sequence } from './sequence.entity';
import { EventSubscriber, EntitySubscriberInterface, InsertEvent } from 'typeorm';

@EventSubscriber()
export class SequenceSubscriber implements EntitySubscriberInterface {

    async beforeInsert(event: InsertEvent<any>) {
        // TODO: Check event.entity for decorator and make sure that _id is number
        const metadata = Reflect.getMetadata('design:type', event.entity, '_id');
        const sequenceRepository = event.connection.getMongoRepository(Sequence);
        const result = await sequenceRepository.findOneAndUpdate({}, { $inc: { value: 1 } }, { upsert: true, returnOriginal: false });
        const id = (result.value as Sequence).value;
        event.entity['_id'] = id; // eslint-disable-line tslint/config
    }
}
