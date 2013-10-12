describe("weekMode:",function(){
	beforeEach(function(){	
		affix("#cal");
	});
	
	//
	// Remember gotoDate uses month base 0
	//
	describe("when weekMode is default",function(){
		beforeEach(function(){
			$("#cal").fullCalendar();
		});
		it("should show 6 weeks for a 5 week month",function(){
			$("#cal").fullCalendar('gotoDate',2013,9);
			var weekCount =  $(".fc-week").length;
			expect(weekCount).toEqual(6);
		});
		it("should show 6 weeks for a 4 week month",function(){
			$("#cal").fullCalendar('gotoDate',2009,2);
			var weekCount =  $(".fc-week").length;
			expect(weekCount).toEqual(6);
		});
		it("should show 6 weeks for a 6 week month",function(){
			$("#cal").fullCalendar('gotoDate',2013,5);
			var weekCount =  $(".fc-week").length;
			expect(weekCount).toEqual(6);
		});
	});
	describe("when weekMode is set to fixed",function(){
		beforeEach(function(){
			$("#cal").fullCalendar({weekMode:"fixed"});
		});
		it("should show 6 weeks for a 5 week month",function(){
			$("#cal").fullCalendar('gotoDate',2013,9);
			var weekCount =  $(".fc-week").length;
			expect(weekCount).toEqual(6);
		});
		it("should show 6 weeks for a 4 week month",function(){
			$("#cal").fullCalendar('gotoDate',2009,2);
			var weekCount =  $(".fc-week").length;
			expect(weekCount).toEqual(6);
		});
		it("should show 6 weeks for a 6 week month",function(){
			$("#cal").fullCalendar('gotoDate',2013,5);
			var weekCount =  $(".fc-week").length;
			expect(weekCount).toEqual(6);
		});
	});
	describe("when weekMode is set to liquid",function(){
		beforeEach(function(){
			$("#cal").fullCalendar({weekMode:"liquid"});
		});
		it("should show 5 weeks for a 5 week month",function(){
			$("#cal").fullCalendar('gotoDate',2013,9);
			var weekCount =  $(".fc-week").length;
			expect(weekCount).toEqual(5);
		});
		it("should show 4 weeks for a 4 week month",function(){
			$("#cal").fullCalendar('gotoDate',2009,1);
			var weekCount =  $(".fc-week").length;
			expect(weekCount).toEqual(4);
		});
		it("should show 6 weeks for a 6 week month",function(){
			$("#cal").fullCalendar('gotoDate',2013,5);
			var weekCount =  $(".fc-week").length;
			expect(weekCount).toEqual(6);
		});
		
	});
	describe("when weekMode is set to variable",function(){
		beforeEach(function(){
			$("#cal").fullCalendar({weekMode:"variable"});
		});
		it("should show 5 weeks for a 5 week month",function(){
			$("#cal").fullCalendar('gotoDate',2013,9);
			var weekCount =  $(".fc-week").length;
			expect(weekCount).toEqual(5);
		});
		it("should show 4 weeks for a 4 week month",function(){
			$("#cal").fullCalendar('gotoDate',2009,1);
			var weekCount =  $(".fc-week").length;
			expect(weekCount).toEqual(4);
		});
		it("should show 6 weeks for a 6 week month",function(){
			$("#cal").fullCalendar('gotoDate',2013,5);
			var weekCount =  $(".fc-week").length;
			expect(weekCount).toEqual(6);
		});
	});
});