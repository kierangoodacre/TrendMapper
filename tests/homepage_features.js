var host = 'hhtp://localhost:3000';

describe("hompage", function() {

	before(function() { 
		casper.start(host);
	});

	it('hello world!', function () {
		expect('body').to.have.text('hello world')
	});

});