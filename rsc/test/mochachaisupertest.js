const chai = require('chai');
const request = require('supertest');
const expect = require('chai').expect;

const url= 'http://localhost:4000';

describe('obtener palabra test al revez ',()=>{

	it('debe obtener la palabra test al revez', done => {
		request(url)
			.get('/iecho?text=test')
			.end(function(err,res){
				console.log(res.body)
				expect(res.body).to.have.property('text').to.be.equal("tset");
				expect(res.status).to.be.equal(200);
				if(res){
					return done(err);
				}
				else{
					done();
				}
			});
	});

});


describe('NO obtener palabra test al revez ',()=>{

	it('NO debe obtener la palabra test al revez', done => {
		request(url)
			.get('/iecho?text=test1')
			.end(function(err,res){
				console.log(res.body)
				expect(res.body).to.have.property('error').to.be.equals("no text");
				expect(res.status).to.be.equal(400);
				if(res){
					return done(err);
				}
				else{
					done();
				}			
			});
	});

});