import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { Test } from '@nestjs/testing';

describe('HomeController', () => {

    let homeController: HomeController;
    let homeService: HomeService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [HomeController],
            components: [HomeService],
        }).compile();

        homeService = module.get<HomeService>(HomeService);
        homeController = module.get<HomeController>(HomeController);
    });

    describe('findAll', () => {

        it('should return an array of Home', async () => {
            const result = ['test'];
            jest.spyOn(homeService, 'findAll').mockImplementation(() => result);
            expect(await homeController.cats()).toBe(result);
        });
    });
});
