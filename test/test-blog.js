//I want to have some expectations from the GET request
// sooo to make a test, I need a few things:
//I need a chai library


/*

Phase 4: TESTING
	1. import chai library
	2. import chai-http
	3. name 'expect' as variable and use chai's expect reference
	4. use chaiHttp
	5. import server.js module, 
				ex: {app, runServer, closeServer } = require('./server');
	6. describe('name', callback)
					callback--> 
						it('should...', callback)
						callback --> 
								ex: expect(double(10)).to.equal(20);

*/


const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const {app, runServer, closeServer } = require('../server');

chai.use(chaiHttp);

before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

describe('Blogs', function() {
	
		it('should return status 200', function() {
				return chai
						.request(app)
      					.get('/blog-posts-jr')
      					.then(function(res) {

      						expect(res).to.have.status(200);
      					
      					});
		});

}); 

