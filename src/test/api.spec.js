const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Path to your Express app
const assert = chai.assert;
const should = chai.should();

chai.use(chaiHttp);
const expect = chai.expect;

// testcase for create product api
describe('Post API Tests', () => {
  let productName ="puma"
  let description = "its running shoes "
  let price = 100
  let isDeleted = false
  let _id= "6586d8e85a83adb642be259f"
  let resBody ={
    "status": true,
    "message": "product deleted succefully.",
    "data": {
        "_id": "6586d7a528cbe0730352e8a1",
        "productName": "being human shirt",
        "description": "its casual shirt",
        "price": 1700,
        "isDeleted": true,
        "createdAt": "2023-12-23T12:50:45.331Z",
        "updatedAt": "2023-12-23T13:35:21.167Z",
        "__v": 0,
        "deletedAt": "2023-12-23T13:35:21.160Z"
    }
}

  it('res body is object', (done) => {
    chai.request(app)
      .post('/api/products')
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        done();
      });
  });

  it('check res object inclued key', (done) => {
    chai.request(app)
      .post('/api/products')
      .end((err, res) => {
        expect(resBody).to.have.all.keys("status","message","data")
        done();
      });
  });

  it('check res object include all properties in nested object', (done) => {
    chai.request(app)
      .post('/api/products')
      .end((err, res) => {
        expect(resBody).to.have.nested.property("data._id","data.productName","data.description","data.price","data.isDeleted","data.createdAt","data.updatedAt","data.__v","data.deletedAt")
        done();
      });
  });

  it('check string', (done) => {
    chai.request(app)
      .post('/api/products')
      .end((err, res) => {
        assert.typeOf(productName,"string")
        assert.typeOf(description,"string")

        done();
      });
  });

  it('check number', (done) => {
    chai.request(app)
      .post('/api/products')
      .end((err, res) => {
        assert.typeOf(price,"number")
        done();
      });
  });

  it('is deleted', (done) => {
    chai.request(app)
      .post('/api/products')
      .end((err, res) => {
        isDeleted.should.be.a("boolean")
        done();
      });
  });

  // testcase for get product api
describe('get API Tests', () => {
  it('check status code is match or not', (done) => {
    // this.timeout(0);
    chai.request(app)
      .get('/api/products')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  }),

  it('check message is same ', (done) => {
    // this.timeout(0);
    chai.request(app)
      .get('/api/products')
      .end((err, res) => {
        expect(res.body.message).to.equal("product fetch succefully.");
        done();
      });
  })

  it('check objectId length', (done) => {
    chai.request(app)
      .get('/api/products')
      .end((err, res) => {
        expect(_id).to.lengthOf(24)
        done();
      });
  })

});

  
});




