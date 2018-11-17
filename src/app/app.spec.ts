import * as express from 'express';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import { HTTP_SERVER_REF } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import mock = require('universal-mock');
import * as expect from 'expect';

describe('App integration test', async () => {

    let server: express.Express;
    let app: INestApplication;
    mock.httpServer = {
        getInstance: () => server,
    };

    before(async () => {
        server = express();
        const module = await Test.createTestingModule({
            imports: [AppModule],
        })
            .overrideProvider(HTTP_SERVER_REF).useValue(mock.httpServer)
            .compile();
        app = module.createNestApplication(server);
        await app.init();
    });

    after(async () => {
        await app.close();
    });

    it(`/GET root`, async () => {
        const { body } = await request(app.getHttpServer())
            .get('/')
            .expect(200);
        expect(body).toEqual({ data: 'Hello World!' });
    });

});
