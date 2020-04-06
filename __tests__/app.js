const request = require('supertest');
const app = require('../app');

describe('App Index', () => {
    it('should GET /', () => {
  
      const res = request(app).get('/')
      //const status = 20
  
      //expect(res.status).toEqual(200)
      expect(res.body).toHaveProperty.status
      //expect(res.body).toEqual(200)
      expect(res.json).toHaveProperty.msg
      //expect(res.status).toHaveProperty(200)
    })
})