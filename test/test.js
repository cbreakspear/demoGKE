const assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let ts = require('../routes/testservices');
//GIT STAGE

chai.use(chaiHttp);

describe('Simple Math Test Testing Unit Test Gate', () => {
    it('should return 2', () => {
        assert.equal(1 + 1, 2);
    });
    it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });

});
