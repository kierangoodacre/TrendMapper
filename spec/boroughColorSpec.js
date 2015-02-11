var BoroughColor = require('../src/boroughColor');

describe("Borough Color", function(){

	var boroughColor;

	beforeEach(function(){
		boroughColor = new BoroughColor();
	});

	describe("Change", function(){

		it("Will have a default color", function(){
			expect(boroughColor.heatColor).toEqual(1)
		});

		it("Will become more red", function(){
			boroughColor.increaseHeatColor(1)
			expect(BoroughColor.heatColor).toEqual(2);
		});

	});


});