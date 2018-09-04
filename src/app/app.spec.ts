import * as express from 'express';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import { HTTP_SERVER_REF } from '@nestjs/core';
import test = require('zora');
import mock = require('universal-mock');

test('App integration test', async t => {

    let server = express();
    mock.httpServer = {
        getInstance: () => server,
    }
    const module = await Test.createTestingModule({
        imports: [AppModule],
    })
        .overrideProvider(HTTP_SERVER_REF).useValue(mock.httpServer)
        .compile();
    let app = module.createNestApplication(server);
    await app.init();

    await t.test(`/GET root`, async () => {
        return request(app.getHttpServer())
            .get('/')
            .expect(200)
            .expect('{"data":"Hello World!"}');
    });

    await app.close();

});
