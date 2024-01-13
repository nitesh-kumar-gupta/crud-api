import request from 'supertest';
import app from '../../src/app';

describe('Test User APIs', () => {
  let userId: string;
  test('Get all records with a GET api/users request (an empty array is expected)', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });
  test('Add new user by a POST api/users request (a response containing newly created record is expected)', async () => {
    const newUser = {
      username: 'testuser',
      age: 25,
      hobbies: ['reading', 'coding']
    };
    const response = await request(app).post('/api/users').send(newUser);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    userId = response.body.id; // Save the created user's id for future tests
    expect(response.body).toEqual({
      id: userId,
      username: 'testuser',
      age: 25,
      hobbies: ['reading', 'coding']
    });
  });
  test('Retrive a user with a GET api/user/{userId} request, we try to get the created record by its id (the created record is expected)', async () => {
    const response = await request(app).get(`/api/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(userId);
    expect(response.body).toEqual({
      id: userId,
      username: 'testuser',
      age: 25,
      hobbies: ['reading', 'coding']
    });
  });
  test('Update the created record with a PUT api/users/{userId} request (a response is expected containing an updated object with the same id)', async () => {
    const updatedUser = {
      username: 'updatedUser',
      age: 30,
      hobbies: ['traveling', 'cooking']
    };
    const response = await request(app)
      .put(`/api/users/${userId}`)
      .send(updatedUser);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(userId);
    expect(response.body).toEqual({
      id: userId,
      username: 'updatedUser',
      age: 30,
      hobbies: ['traveling', 'cooking']
    });
  });
  test('Delete the created user with a DELETE api/users/{userId} request, we delete the created object by id (confirmation of successful deletion is expected)', async () => {
    const response = await request(app).delete(`/api/users/${userId}`);
    expect(response.status).toBe(204);
  });

  test('Retrieve a user With a GET api/users/{userId} request, we are trying to get a deleted object by id (expected answer is that there is no such object)', async () => {
    const response = await request(app).get(`/api/users/${userId}`);
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      message: `We could not find the user with id as ${userId} you requested.`
    });
  });
});
