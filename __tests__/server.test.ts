import request from 'supertest';
import app from '../src/app';

describe('Test Server', () => {
  test('Is server running', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Server is running' });
  });
});
