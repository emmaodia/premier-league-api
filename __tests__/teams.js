const request = require('supertest')
const app = require('../routes/teams')
describe('GET', () => {
    // beforeEach(() => {
    //     jest.setTimeout(5000);
    //   });

  it('should GET All Teams', () => {
    const res = request(app).get('/');
    expect(res.body).toHaveProperty.status
    expect(res.body).toHaveProperty.json
  })

  it('should GET ONE Team', () => {
    const res = request(app).get('/:team');
    expect(res.body).toHaveProperty.status
    expect(res.body).toHaveProperty.json
  })
})