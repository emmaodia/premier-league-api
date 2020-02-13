const request = require('supertest')
const app = require('../routes/teams')
describe('GET', () => {
    beforeEach(() => {
        jest.setTimeout(5000);
      });

  it('should get all teams', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200)
    //expect(res.body).toHaveProperty.json
  })
})
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../routes/teams');
// // Configure chai
// chai.use(chaiHttp);
// const expect = chai.expect;
// describe("TEAM", () => {
//     describe("GET /", () => {
//         // Test to get all Teams
//         it("should get all Teams", (done) => {
//              chai.request(app)
//                  .get('/')
//                  .end((err, res) => {
//                     //expect(res.status(200)).to.equal(200);
//                      res.body.should.be.json;
//                      done();
//                   }, (err) => {
//                       done(err)
//                   });
//          });
//         // Test to get single student record
//         // it("should get a single student record", (done) => {
//         //      const id = 1;
//         //      chai.request(app)
//         //          .get(`/${id}`)
//         //          .end((err, res) => {
//         //              res.should.have.status(200);
//         //              res.body.should.be.a('object');
//         //              done();
//         //           });
//         //  });

//         // Test to get single student record
//         // it("should not get a single student record", (done) => {
//         //      const id = 5;
//         //      chai.request(app)
//         //          .get(`/${id}`)
//         //          .end((err, res) => {
//         //              res.should.have.status(404);
//         //              done();
//         //           });
//         //  });
//     });
// });
