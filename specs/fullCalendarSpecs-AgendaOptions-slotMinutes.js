"use strict";
describe("slotMinutes:",function(){

	beforeEach(function(){
		affix("#cal");
	});

	describe("when using the default Settings",function(){
		describe("in agendaWeek",function(){
			it("should have slots 1440/30 slots",function(){
				var options = {
					defaultView:'agendaWeek'
					}
				$("#cal").fullCalendar(options);
				var slotCount = $(".fc-agenda-slots tr").length;
				expect(slotCount).toEqual(Math.ceil(1440/30));
			}); 
		});
		describe("in agendaDay",function(){
			it("should have slots 1440/30 slots",function(){
				var options = {
					defaultView:'agendaDay'
					}
				$("#cal").fullCalendar(options);
				var slotCount = $(".fc-agenda-slots tr").length;
				expect(slotCount).toEqual(Math.ceil(1440/30));
			}); 
		});
	});
	describe("when slotMinutes is set to 30",function(){
		describe("in agendaWeek",function(){
			it("should have slots 1440/30 slots",function(){
				var options = {
					defaultView:'agendaWeek'
					}
				$("#cal").fullCalendar(options);
				var slotCount = $(".fc-agenda-slots tr").length;
				expect(slotCount).toEqual(Math.ceil(1440/30));
			}); 
		});
		describe("in agendaDay",function(){
			it("should have slots 1440/30 slots",function(){
				var options = {
					defaultView:'agendaDay'
					}
				$("#cal").fullCalendar(options);
				var slotCount = $(".fc-agenda-slots tr").length;
				expect(slotCount).toEqual(Math.ceil(1440/30));
			}); 
		});
	});
	describe("when slotMinutes is set to a series of times",function(){
			
		describe("in agendaWeek",function(){
			var x = [10,12,15,17,20,30,35,45,60,62,120,300]
			beforeEach(function(){
				affix("#cal2");	
			});
			x.forEach(function(slotMinutesIn){
				it("should have slots 1440/x slots",function(){
					var options = {
						defaultView:'agendaWeek',
						slotMinutes:slotMinutesIn
						};
					$("#cal2").fullCalendar(options);
					var slotCount = $(".fc-agenda-slots tr").length;
					
					var expected = Math.ceil(1440/slotMinutesIn);
					expect(slotCount).toEqual(expected);
				});
			}); 
		});
		describe("in agendaDay",function(){
			var x = [10,12,15,17,20,30,35,45,60,62,120,300]
			beforeEach(function(){
				affix("#cal2");	
			});
			x.forEach(function(slotMinutesIn){
				it("should have slots 1440/x slots",function(){
					var options = {
						defaultView:'agendaWeek',
						slotMinutes:slotMinutesIn
						};
					$("#cal2").fullCalendar(options);
					var slotCount = $(".fc-agenda-slots tr").length;
					
					var expected = Math.ceil(1440/slotMinutesIn);
					expect(slotCount).toEqual(expected);
				});
			}); 
		});
		
	});
});