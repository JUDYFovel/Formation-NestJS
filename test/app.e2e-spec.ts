import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from './../src/app.module.js';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/tasks (POST) returns the created task', async () => {
    const response = await request(app.getHttpServer())
      .post('/tasks')
      .send({
        title: 'Learn Nestjs',
        description: 'Complete the NestJS course',
        status: 'OPEN',
      })
      .expect(201);

    expect(response.body).toEqual({
      id: expect.any(String),
      title: 'Learn Nestjs',
      description: 'Complete the NestJS course',
      status: 'OPEN',
    });
  });

  afterEach(async () => {
    await app.close();
  });
});
