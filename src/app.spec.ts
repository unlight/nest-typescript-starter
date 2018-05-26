import * as express from 'express';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

describe('App integration test', () => {

    let app: INestApplication;
    let server: express.Express;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        server = express();
        app = module.createNestApplication(server);
        await app.init();
    });

    afterAll(() => {
        app.close();
    });

    it('/GET /', () => {
        return request(server)
            .get('/')
            .expect(200)
            .expect('{"data":"Hello World!"}');
    });
});
