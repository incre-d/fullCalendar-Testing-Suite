describe("When fullCalendar() is called on a div", function () {
	
	
	beforeEach(function(){
		affix("#calendar");
	});
	
	it("should contain a table fc-header ", function () {
		$("#calendar").fullCalendar();
		var item = $("#calendar > table.fc-header")[0];		
		expect(item).not.toBe(null);		
    });
	
	it("should contain a div fc-content ", function(){
		$("#calendar").fullCalendar();
		var item = $("#calender > div.fc-content")[0];
		expect(item).not.toBe(null);
	});
	
    it("should only contain 2 elements ", function(){
		$("#calendar").fullCalendar();
		var count = $("#calendar >").length;
		expect(count).toEqual(2);
	});
	
	xdescribe(" and then added again",function(){
		it("should still only have a single set of calend",function(){
			$("#calendar").fullCalendar();
			$("#calendar").fullCalendar();
			var count = $("#calendar >").length;
			expect(count).toEqual(2);
	
		});
	});
	
	xdescribe(" when event is dragged from one cell to another",function(){
		it("should move to the new cell",function(){
			var eventName = "xyzAllDayEvent";
			
			$("#calendar").fullCalendar({editable:true});
			$("#calendar").fullCalendar("addEventSource",{events:[{title:eventName,start:new Date()}]});
			var el = $('div .fc-event');	
			
			var offsetBefore = el.offset();
			
			dump(offsetBefore);
			var options = { dx: 200 , dy:0, moves:10, handle:"corner"};
			el.simulate( "drag", options);
			
			dump(el.offset());
			
		});
	});
	
	
});