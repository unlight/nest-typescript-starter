import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { Test } from '@nestjs/testing';
import { Cat } from './cat.entity';
// import { test } from 'zora';
import test = require('zora');
import mock = require('universal-mock');

test('CatController', async t => {

    mock.catRepository = {
        find: () => null,
    };

    const module = await Test.createTestingModule({
        controllers: [CatController],
        providers: [
            CatService,
            { provide: 'CatRepository', useValue: mock.catRepository },
        ],
    }).compile();

    let catService = module.get<CatService>(CatService);
    let catController = module.get<CatController>(CatController);

    t.test('findAll should return an array', async t => {
        const result: Cat[] = [{ id: 1} as Cat];
        mock.catRepository.find = async () => result;
        t.equal(await catController.cats(), result);
    });
});
