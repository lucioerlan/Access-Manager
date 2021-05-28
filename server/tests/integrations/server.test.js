const request = require('supertest');
const app = require('../../src');

describe('GET /api', () => {
  it('respond with json', (done) => {
    request(app)
      .get('/api/get-all-ticket')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
