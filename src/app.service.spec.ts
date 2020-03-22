import { Test, TestingModule } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            providers: [AppService],
        }).compile();
    });

    describe('getHello', () => {
        it('should return Hello World!', () => {
            const service = app.get<AppService>(AppService);
            expect(service.getHello()).toBe('Hello World!');
        });
    });
});
