"use strict";
describe("fullCalendar(Integration) :",function(){
	describe("when using default header options",function(){

		beforeEach(function(){
			affix("#calendar");
		});
		
		it("should have title as default on left",function(){
			$("#calendar").fullCalendar();
			var headr = $("#calendar > table.fc-header .fc-header-left > span")[0];		
			expect(headr).toHaveClass("fc-header-title");
			
		});
		it("should have empty center",function(){
			$("#calendar").fullCalendar();
			var cntr = $("#calendar > table.fc-header .fc-header-center")[0];		
			expect(cntr).toBeEmpty();
		});
		it("should have right with 'today|space|left|right",function(){
			$("#calendar").fullCalendar();

			var td = $("#calendar > table.fc-header .fc-header-right > span")[0];		
			var sp = $("#calendar > table.fc-header .fc-header-right > span")[1];		
			var lft = $("#calendar > table.fc-header .fc-header-right > span")[2];		
			var rt = $("#calendar > table.fc-header .fc-header-right > span")[3];		
			
			expect(td).toHaveClass('fc-button-today');			
			expect(sp).toHaveClass('fc-header-space');
			expect(lft).toHaveClass('fc-button-prev');
			expect(rt).toHaveClass('fc-button-next');
		});
		
		
	});

	describe("when supplying header options",function(){

		beforeEach(function(){
			affix("#calendar");
			var options = {
				header : {
					left:'next,prev',
					center : 'prevYear today nextYear agendaView,dayView',
					right : 'title'
					}};
			$("#calendar").fullCalendar(options);			
		});
		
		it("should have title on the right",function(){
			var item = $("#calendar > table.fc-header .fc-header-right > span")[0];
			expect(item).toHaveClass("fc-header-title");
		});
		it("should have next|prev on left",function(){
			var nxt = $("#calendar > table.fc-header .fc-header-left > span")[0];
			var prv = $("#calendar > table.fc-header .fc-header-left > span")[1];
			expect(nxt).toHaveClass("fc-button-next");
			expect(prv).toHaveClass("fc-button-prev");
		});
		it("should have prevYear|space|today|space|nextYear in center",function(){
			var py = $("#calendar > table.fc-header .fc-header-center > span")[0];
			var sp1 = $("#calendar > table.fc-header .fc-header-center > span")[1];
			var td = $("#calendar > table.fc-header .fc-header-center > span")[2];
			var sp2 = $("#calendar > table.fc-header .fc-header-center > span")[3];
			var ny = $("#calendar > table.fc-header .fc-header-center > span")[4];
			
			expect(py).toHaveClass("fc-button-prevYear");
			expect(sp1).toHaveClass("fc-header-space");
			expect(td).toHaveClass("fc-button-today");
			expect(sp2).toHaveClass("fc-header-space");
			expect(ny).toHaveClass("fc-button-nextYear");
				
		});
	});

	describe("When fullCalendar() is called on a div", function () {
		
		
		beforeEach(function(){
			affix("#calendar");
			$("#calendar").fullCalendar();
		});
		
		it("should contain a table fc-header ", function () {	
			var item = $("#calendar > table.fc-header")[0];		
			expect(item).not.toBe(null);		
		});
		
		it("should contain a div fc-content ", function(){
			var item = $("#calender > div.fc-content")[0];
			expect(item).not.toBe(null);
		});
		
		it("should only contain 2 elements ", function(){
			var count = $("#calendar >").length;
			expect(count).toEqual(2);
		});
		
		
		xdescribe("and then called again",function(){
			it("should still only have a single set of calendar [header,content]",function(){
				$("#calendar").fullCalendar();
				var count = $("#calendar >").length;
				expect(count).toEqual(2);	
			});
		});
		
		
		xdescribe("when event is dragged from one cell to another",function(){
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
});