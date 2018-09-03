import * as express from 'express';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { createSpyObj } from 'jest-createspyobj';
import { AppModule } from './app.module';
import { HTTP_SERVER_REF } from '@nestjs/core';

describe('App integration test', () => {

    let app: INestApplication;
    let server: express.Express;

    beforeAll(async () => {
        server = express();
        const httpServer: { [k: string]: jest.Mock<any> } = createSpyObj('httpServer', ['getInstance', 'use']);
        httpServer.getInstance.mockImplementation(() => server);
        const module = await Test.createTestingModule({
            imports: [AppModule],
        })
            .overrideProvider(HTTP_SERVER_REF).useValue(httpServer)
            .compile();
        app = module.createNestApplication(server);
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    it(`/GET root`, () => {
        return request(app.getHttpServer())
            .get('/')
            .expect(200)
            .expect('{"data":"Hello World!"}');
    });

});
