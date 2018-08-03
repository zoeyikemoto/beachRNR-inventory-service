const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

const server = require('../server/index');


describe('Server', function() {
  describe('#get()', function() {
    it('should return \'Hello World!\' by default', function(done) {
      chai.request(server)
        .get('/')
        .end(function (err, res) {
          expect(res.text).to.equal('Hello World!');
          done();
        });
    });
    it('should return 200 if an id match is found', function(done) {
      chai.request(server)
        .get('/rooms/2912000')
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should return 404 if there is no id match', function(done) {
      chai.request(server)
        .get('/rooms/1337')
        .end(function (err, res) {
          expect(res).to.have.status(404);
          done();
        });
    });
    it('should return the listing object with the matching id', function(done) {
      chai.request(server)
        .get('/rooms/2912000')
        .end(function (err, res) {
          expect(res.body.unitName).to.equal("Beautiful Guest Suite for 2");
          done();
        });
    });
  });
});