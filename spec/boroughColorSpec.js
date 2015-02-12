var BoroughColor = require('../src/colorChange.js');

describe("BoroughColor", function(){

	var boroughColor;
	var test;

	beforeEach(function(){
		boroughColor = new BoroughColor();
	});

	describe("Default", function(){

		it("should have a default color of 3", function() {
			expect(boroughColor.heatColor).toEqual(3)
		});

		it("can see the object variable"), function(){
			expect(test.heatColor2).toEqual(3);
		};


		it("Will become more red", function(){
			boroughColor.increaseHeatColor(2)
			expect(BoroughColor.heatColor).toEqual(2);
		});

		it("will expect an array of colours", function(){
			expect(boroughColor.colours).toEqual(colours)
		})

	});


});
