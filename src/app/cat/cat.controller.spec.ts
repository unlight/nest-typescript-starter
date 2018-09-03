import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { Test } from '@nestjs/testing';

describe('CatController', () => {

    let catController: CatController;
    let catService: CatService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [CatController],
            providers: [
                CatService,
                { provide: 'CatRepository', useValue: null },
            ],
        }).compile();

        catService = module.get<CatService>(CatService);
        catController = module.get<CatController>(CatController);
    });

    describe('findAll', () => {

        it('should return an array', async () => {
            const result = ['test'];
            jest.spyOn(catService, 'findAll').mockImplementation(() => result);
            expect(await catController.cats()).toBe(result);
        });
    });
});
