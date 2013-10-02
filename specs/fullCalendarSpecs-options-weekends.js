"use strict";
describe("when weekends option is set",function(){
	beforeEach(function(){
		affix("#calendar");
		var cal = $("#calendar");
	})
	it("should show sat and sun if true",function(){
		var options = { weekends:true };
		$("#calendar").fullCalendar(options);
		var sun = $(".fc-day-header.fc-sun")[0];
		var sat = $(".fc-day-header.fc-sun")[0];

		expect(sun).toBeDefined();
		expect(sat).toBeDefined();
	});
	it("should not show sat and sun if false",function(){
		var options = { weekends:false };	
		$("#calendar").fullCalendar(options);
		
		var sun = $(".fc-day-header.fc-sun")[0];
		var sat = $(".fc-day-header.fc-sun")[0];
		expect(sun).not.toBeDefined();
		expect(sat).not.toBeDefined();
	});
	
	describe(" and then changed",function(){
		it("should be able to switch the weekends from on to off",function(){
			var options = { weekends:true };	
			var newOptions = {weekends:false };
			$("#calendar").fullCalendar(options);
			var sunOn = $(".fc-day-header.fc-sun").length;
			
			$("#calendar").fullCalendar('options',newOptions);
			var sunOff = $(".fc-day-header.fc-sun").length;
			
			expect(sunOn).toEqual(1);
			expect(sunOff).toEqual(0);
		})
		it("should be able to switch the weekends from off to on",function(){
			var options = { weekends:false };	
			var newOptions = {weekends:true };
			$("#calendar").fullCalendar(options);
			var sunOff = $(".fc-day-header.fc-sun").length;
			
			$("#calendar").fullCalendar('options',newOptions);
			var sunOn = $(".fc-day-header.fc-sun").length;
			
			expect(sunOn).toEqual(1);
			expect(sunOff).toEqual(0);
			
		})
	});
	
});
