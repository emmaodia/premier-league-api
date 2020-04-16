
const request = require('supertest');
const app = require('../app');

describe('App Index', () => {
    it('should GET /', () => {
  
      const res = request(app).get('/')
      expect(res.body).toHaveProperty.status
      expect(res.json).toHaveProperty.msg
    })
})
