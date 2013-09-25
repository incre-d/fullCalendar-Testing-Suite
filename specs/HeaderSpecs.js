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
	
	describe("when header is loaded with a view ",function(){
		beforeEach(function(){
			affix("#cal-item");
		});
		describe("month",function(){
			it("should display view button",function(){
			
				var options = {
					header: {
						left: 'month',
						center: '',
						right: ''
					},
					buttonIcons : { month : 'abc' },
					buttonText : { month : 'month' }
					
				}
				var el = $("#cal-item")[0];
				var views = {
					month : el
				}
				
				var header = headerObject([],options,null,views);
				var headr = header.render();
				
				expect($(headr[0]).find(".fc-header-left")).toContain('span.fc-button-month');
				
			})
		});
		describe("agendaWeek",function(){
			it("should display agendaWeek button",function(){
			
				var options = {
					header: {
						left: 'agendaWeek',
						center: '',
						right: ''
					},
					buttonIcons : { agendaWeek : 'abc' },
					buttonText : { agendaWeek : 'aW' }
					
				}
				var el = $("#cal-item")[0];
				var views = {
					agendaWeek : el
				}
				
				var header = headerObject([],options,null,views);
				var headr = header.render();
				
				expect($(headr[0]).find(".fc-header-left")).toContain('span.fc-button-agendaWeek');
				
			})
		});
		describe("agendaMonth",function(){
			it("should display agendaMonth button",function(){
			
				var options = {
					header: {
						left: 'agendaMonth',
						center: '',
						right: ''
					},
					buttonIcons : { agendaMonth : 'abc' },
					buttonText : { agendaMonth : 'aM' }
					
				}
				var el = $("#cal-item")[0];
				var views = {
					agendaMonth : el
				}
				
				var header = headerObject([],options,null,views);
				var headr = header.render();
				
				expect($(headr[0]).find(".fc-header-left")).toContain('span.fc-button-agendaMonth');
				
			})
		});
		describe("basicWeek",function(){
			it("should display basicWeek button",function(){
			
				var options = {
					header: {
						left: 'basicWeek',
						center: '',
						right: ''
					},
					buttonIcons : { basicWeek : 'abc' },
					buttonText : { basicWeek : 'aM' }
					
				}
				var el = $("#cal-item")[0];
				var views = {
					basicWeek : el
				}
				
				var header = headerObject([],options,null,views);
				var headr = header.render();
				
				expect($(headr[0]).find(".fc-header-left")).toContain('span.fc-button-basicWeek');
				
			})
		});
	});
	


	describe("when options.theme is ",function(){
		
		beforeEach(function(){
			affix("#cal-item");
		});
		
		
		
		describe("turned on", function(){
			it("should set the theme to ui",function(){
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