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
	
	describe(" and then added again",function(){
		it("should still only have a single set of calend",function(){
			$("#calendar").fullCalendar();
			$("#calendar").fullCalendar();
			var count = $("#calendar >").length;
			expect(count).toEqual(2);
	
		});
	});
	
});