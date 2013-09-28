"use strict";
describe("fullCalendar(Integration) :",function(){

	beforeEach(function(){
		affix("#calendar");
	});
	
	describe("when using default header options",function(){

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
		describe("and click next",function(){
			it("should change view to next month",function(){
				$("#calendar").fullCalendar('gotoDate',2010,1,1);
				$(".fc-button-next").simulate("click");
				var newDate = $("#calendar").fullCalendar('getDate');
				expect(newDate).toEqual(new Date(2010,2,1));
			});
		});
		describe("and click prev",function(){
			it("should change view to prev month",function(){
				$("#calendar").fullCalendar('gotoDate',2010,1,1);
				$(".fc-button-prev").simulate("click");
				var newDate = $("#calendar").fullCalendar('getDate');
				expect(newDate).toEqual(new Date(2009,12,1));
			});
		});
		describe("and click prevYear",function(){
			it("should change view to prev month",function(){
				$("#calendar").fullCalendar('gotoDate',2010,1,1);
				$(".fc-button-prevYear").simulate("click");
				var newDate = $("#calendar").fullCalendar('getDate');
				expect(newDate).toEqual(new Date(2009,1,1));
			});
		});
		describe("and click nextYear",function(){
			it("should change view to prev month",function(){
				$("#calendar").fullCalendar('gotoDate',2010,1,1);
				$(".fc-button-nextYear").simulate("click");
				var newDate = $("#calendar").fullCalendar('getDate');
				expect(newDate).toEqual(new Date(2011,1,1));
			});
		});
		describe("and click nextYear",function(){
			it("should change view to prev month",function(){
				$("#calendar").fullCalendar('gotoDate',2010,1,1);
				$(".fc-button-today").simulate("click");
				var newDate = $("#calendar").fullCalendar('getDate');
				expect(newDate.toDateString()).toEqual(new Date().toDateString());
			});
		});
		
	});

	describe("when setting header to false",function(){
		beforeEach(function(){
			var options = { header: false};			
			$("#calendar").fullCalendar(options);
		})
		it("should not have header table",function(){
			var headerTableCount = $("table.fc-header").length;
			expect(headerTableCount).toEqual(0);
			
		});
	});
	
	describe("When fullCalendar() is called on a div", function () {
		
		beforeEach(function(){
			$("#calendar").fullCalendar();
		});
		
		it("should contain a table fc-header ", function () {	
			var header = $("#calendar > table.fc-header");		
			expect(header[0]).not.toBeUndefined();		
		});
		
		it("should contain a div fc-content ", function(){
			var content = ($("#calendar > div.fc-content"));
			expect(content[0]).not.toBeUndefined();
		});
		
		it("should only contain 2 elements ", function(){
			var calenderNodeCount = $("#calendar >").length;
			expect(calenderNodeCount).toEqual(2);
		});
		
		
		describe("and then called again",function(){
			it("should still only have a single set of calendar [header,content]",function(){
				$("#calendar").fullCalendar();
				var count = $("#calendar >").length;
				expect(count).toEqual(2);	
			});
		});
		
		// can't do event dragging yet.
		// need to work out how fullCalendar is intercepting events.
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