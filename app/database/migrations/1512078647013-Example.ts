import { MigrationInterface, QueryRunner } from 'typeorm';
import { Cat } from '../../cat/cat.entity';

export class Example1512078647013 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const catRepository = queryRunner.manager.connection.getRepository(Cat);
        const cat = await catRepository.findOne();
        if (!cat) {
            throw new Error('Cannot find.');
        }
        cat.name = 'Barsik';
        await catRepository.save(cat);
        await catRepository.update({ id: cat.id }, { name: 'Fluffy' });
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
