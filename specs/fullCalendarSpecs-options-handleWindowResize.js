"use strict";
describe("handleWindowResize:",function(){
	beforeEach(function(){	
		affix("#cal");
	});
	
	
	describe("When default is used, should fire resize event",function(){
		it("should fire resize",function(){
		
			var resized = 0;
			
			$("#cal").fullCalendar({
				
				
				windowResize:function(view){
					resized++;
				}
			});
			expect(resized).toEqual(1);
		});
		
	});
	
});