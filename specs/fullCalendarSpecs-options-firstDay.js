describe("First Day : ",function(){
	beforeEach(function(){
		affix("#cal");
	});
	
	describe("when using default settings",function(){
		beforeEach(function(){
			$("#cal").fullCalendar();
		});
		
		it("should make Sunday the first day of the week",function(){				
			var dayFirst = $(".fc-day-header")[0];
			expect(dayFirst).toHaveClass('fc-sun');
		});
	});
	
	describe("when setting firstDay to 0",function(){
		beforeEach(function(){
			var options = {firstDay:0};
			$("#cal").fullCalendar(options);
		});
		
		it("should make Sunday the first day of the week",function(){				
			var dayFirst = $(".fc-day-header")[0];
			expect(dayFirst).toHaveClass('fc-sun');
		});
	});
	describe("when setting firstDay to 1",function(){
		beforeEach(function(){
			var options = {firstDay:1};
			$("#cal").fullCalendar(options);
		});
		
		it("should make Monday the first day of the week",function(){				
			var dayFirst = $(".fc-day-header")[0];
			expect(dayFirst).toHaveClass('fc-mon');
		});
	});
	describe("when setting firstDay to 2",function(){
		beforeEach(function(){
			var options = {firstDay:2};
			$("#cal").fullCalendar(options);
		});
		
		it("should make Tuesday the first day of the week",function(){				
			var dayFirst = $(".fc-day-header")[0];
			expect(dayFirst).toHaveClass('fc-tue');
		});
	});
	describe("when setting firstDay to 3",function(){
		beforeEach(function(){
			var options = {firstDay:3};
			$("#cal").fullCalendar(options);
		});
		
		it("should make Wednesday the first day of the week",function(){				
			var dayFirst = $(".fc-day-header")[0];
			expect(dayFirst).toHaveClass('fc-wed');
		});
	});
	describe("when setting firstDay to 4",function(){
		beforeEach(function(){
			var options = {firstDay:4};
			$("#cal").fullCalendar(options);
		});
		
		it("should make Thursday the first day of the week",function(){				
			var dayFirst = $(".fc-day-header")[0];
			expect(dayFirst).toHaveClass('fc-thu');
		});
	});
	describe("when setting firstDay to 5",function(){
		beforeEach(function(){
			var options = {firstDay:5};
			$("#cal").fullCalendar(options);
		});
		
		it("should make Friday the first day of the week",function(){				
			var dayFirst = $(".fc-day-header")[0];
			expect(dayFirst).toHaveClass('fc-fri');
		});
	});
	describe("when setting firstDay to 6",function(){
		beforeEach(function(){
			var options = {firstDay:6};
			$("#cal").fullCalendar(options);
		});
		
		it("should make Saturday the first day of the week",function(){				
			var dayFirst = $(".fc-day-header")[0];
			expect(dayFirst).toHaveClass('fc-sat');
		});
	});
	
	describe("when new firstDay options are set",function(){
		it("should change the first day of the week",function(){
			var options = {firstDay:1};
			$("#cal").fullCalendar(options);
			var firstDayBeforeChange = $(".fc-day-header")[0];
			var newOptions = {firstDay:4};
			$("#cal").fullCalendar(newOptions);
			var firstDayAfterChange =  $(".fc-day-header")[0];
			expect(firstDayBeforeChange).toHaveClass('fc-mon');
			expect(firstDayAfterChange).toHaveClass('fc-thu');
		});
	});
});