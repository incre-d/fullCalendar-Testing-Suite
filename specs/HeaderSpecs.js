"use strict";
describe("HeaderSpecs:",function(){

	beforeEach(function(){
		affix('#calendar table.fc-header[style="width:100%"]/>');			
	});
	
	describe("when render called",function(){
		it("should call sectionRender in order",function(){
		    var mockRenderer = { 
				render : function(value){
						return value;
				}}
			spyOn(mockRenderer,'render').andCallThrough();	
			var options = { theme : true, header: { left:'title'} };
			var header = headerObject([],options,mockRenderer);
			
			header.render();
			
			expect(mockRenderer.render.calls.length).toEqual(3);
			expect(mockRenderer.render.calls[0].args[0]).toEqual('left');
			expect(mockRenderer.render.calls[1].args[0]).toEqual('center');
			expect(mockRenderer.render.calls[2].args[0]).toEqual('right');
				
			
		});
	});
	
	describe("when adding title to a section",function(){
		it("should have a title in the appropriate section",function(){
			var options = { theme : true, header: { left:'title',center:'',right:''} };
			var header = headerObject([],options);
			var headr = header.render();						
			expect($(headr[0])).toContain('.fc-header-left .fc-header-title');
		});
	});
	
	describe("when options.theme is ",function(){
		
		beforeEach(function(){
			affix("#cal-item");
		});
		
		describe("turned on", function(){
			iit("should set the theme to ui",function(){
				var options = 
				{	theme : false , 
					header : { left : 'prev,prev,prev', center:'', right: '' },
					buttonIcons : { prev : 'abc' },
					buttonText : { prev : 'PREV' }
				};		
				var item = $("#cal-item")[0];
				var cal = {
					prev : item
				};	
				options.theme = true
				var header = headerObject(cal,options);
				var headr = header.render();
				
				expect(headr[0]).toContain('.fc-header-left .ui-state-default');
				
			});
		});
		describe("turned off",function(){
			it("should set the theme to fc",function(){
				var options = 
				{	theme : false , 
					header : { left : 'prev', center:'', right: '' },
					buttonIcons : { prev : 'abc' },
					buttonText : { prev : 'PREV' }
				};		
				var item = $("#cal-item")[0];
				var cal = {
					prev : item
					};				
				options.theme = false
				var header = headerObject(cal,options);
				var headr = header.render();
				
				expect(headr[0]).toContain('.fc-header-left .fc-state-default');
				

			});
		});
	});
	
	

	

});