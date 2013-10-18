"use strict";
describe("weekNumberCalculation:",function(){
	beforeEach(function(){
		affix("#cal");
	});
	
	describe("when using the default",function(){
		it("should return iso standard",function(){
			$("#cal").fullCalendar({editable:true,weekNumbers:true});
			$("#cal").fullCalendar('gotoDate',2013,10,17);
			var weekNum = parseInt($(".fc-week.fc-first .fc-week-number div").text());
			expect(weekNum).toEqual(43);
		});
	});
	describe("when using a defined weekNumber calculation",function(){
		it("should return the calculated number",function(){
			$("#cal").fullCalendar({editable:true,weekNumbers:true,weekNumberCalculation:myWeekNumber});
			$("#cal").fullCalendar('gotoDate',2013,10,17);
			var weekNum = parseInt($(".fc-week.fc-first .fc-week-number div").text());
			expect(weekNum).toEqual(4);
		});
	});
	
	var myWeekNumber = function(someDate){
				return 4;
			};
			
	
});