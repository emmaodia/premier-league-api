// const chai = require('chai');
// const assert = chai.assert;
// const chaiHttp = require('chai-http');

// const app = require('../app');

// chai.use(chaiHttp);

// describe('API entry file', () => {
//     it('should return Welcome, Nerd!', () => {
//         chai.request(app)
//         .get('/')
//         .then(res => {
//             assert.deepEqual(res.body, {msg: "Welcome, Nerd!"});
//         })
//         .catch(err => console.log(err))
//     })
// })

const request = require('supertest')
const app = require('../app')
describe('App Index', () => {
  it('should get index page', async () => {
    const res = await request(app)
      .get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty.json
  })
})
