"use strict";
describe("height:",function(){

	beforeEach(function(){
		affix("#cal");
	});
	
	describe("when using default height",function(){
		it("should use default height based on default aspect ratio of 1:35",function(){
			$("#cal").css("width",1350);
			$("#cal").fullCalendar();
			var height = parseInt($(".fc-content").css("height"));
			expect(height).toEqual(1000);
		});
	});
	
	describe("when setting height with the setter",function(){
		beforeEach(function(){
			$("#cal").css("width",673);			
			$("#cal").fullCalendar();
			$("#cal").fullCalendar('option','height',751);
		});
		
		it("should not change the width of the block level container",function(){
			var width = parseInt($("#cal").css("width"));
			expect(width).toEqual(673);
		});
		it("should set the size of the block level container to the height", function(){			
			var height = parseInt($("#cal").css("height"));
			expect(height).toEqual(751);			
		});
	});
	
	describe("when setting height at instantiation",function(){
		beforeEach(function(){
			$("#cal").css("width",673);
			$("#cal").fullCalendar({height:751});			
		});
		
		it("should not change the width of the block level container",function(){
			var width = parseInt($("#cal").css("width"));
			expect(width).toEqual(673);
		});
		it("should set the size of the block level container to the height", function(){
			var height = parseInt($("#cal").css("height"));
			expect(height).toEqual(751);
			
		});
	});


});