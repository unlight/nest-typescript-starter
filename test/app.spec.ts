import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { Server } from 'http';
import request from 'supertest';

import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;
    let server: Server;

    beforeAll(async () => {
        const moduleFixture = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
        server = app.getHttpServer();
    });

    afterAll(async () => {
        await app.close();
    });

    it('graphql app version', async (done) => {
        const result = await request(server)
            .post('/graphql')
            .send({ query: `{ app { version } }` });
        expect(result.body.data).toEqual({ app: { version: '0.0.1' } });
        done();
    });

    it('/ (GET)', async (done) => {
        await request(server).get('/').expect(404);
        done();
    });
});
