import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { Test } from '@nestjs/testing';
import { Cat } from './cat.entity';
import mock = require('universal-mock');
import assert = require('assert');

describe('CatController', () => {

    let catService: CatService;
    let catController: CatController;
    mock.catRepository = {
        find: () => null,
    };

    before(async () => {
        const module = await Test.createTestingModule({
            controllers: [CatController],
            providers: [
                CatService,
                { provide: 'CatRepository', useValue: mock.catRepository },
            ],
        }).compile();
        catService = module.get<CatService>(CatService);
        catController = module.get<CatController>(CatController);
    });

    it('findAll should return an array', async () => {
        const result: Cat[] = [{ id: 1 } as Cat];
        mock.catRepository.find = async () => result;
        assert(await catController.cats() === result);
    });
});
