"use strict";

describe("CoordinateGrid",function(){
	describe("When build is called",function(){
		it("should call the buildFunc passed in to it",function(){
		var buildSpy = jasmine.createSpy("buildFunc").andReturn([[1],[2]]);
			var coordGrid = coordsGrid(buildSpy);
			coordGrid.build();
			expect(buildSpy).toHaveBeenCalled();
		});
	});
	
	describe("If build is not called",function(){
		it("buildFunc should not have been called",function(){
			
			var buildSpy = jasmine.createSpy("buildFunc");
			var coordGrid = coordsGrid(buildSpy);
			expect(buildSpy).not.toHaveBeenCalled();
		});
	});
	
	describe("When cell is called where the buildFunc returns rows and cols object",function(){
		it("should return the row and col position for the x, y coord provided",function(){
			
			var buildFunc = function(){
				var rows = [[0,10],[10,20],[20,30],[30,40]];
				var cols = [[0,10],[10,20],[20,30],[30,40]];
				return {rows:rows,cols:cols};
			};
			var coordGrid = coordsGrid(buildFunc);
			coordGrid.build();
			
			var rc = coordGrid.cell(39,12);
			
			expect(rc).toEqual({row:1,col:3});
			
		});
		it("should return null if cell is out of range",function(){
		
			var buildFunc = function(){
				var rows = [[0,10],[10,20],[20,30],[30,40]];
				var cols = [[0,10],[10,20],[20,30],[30,40]];
				return {rows:rows,cols:cols};
			};
			var coordGrid = coordsGrid(buildFunc);
			coordGrid.build();
			
			var rowCoordLargerThanRowsArray = 51;
			var rc = coordGrid.cell(rowCoordLargerThanRowsArray,12);
			
			expect(rc).toBe(null);
		
		
		});
	});
	
	describe("When rect is called where the buildFunc returns rows and cols object", function(){
	
		it("should return top,left, width, height of cell at cell,cell,offset coord provided",function(){
		
			//Arrange
			var buildFunc = function(){
				var data ={
					rows : [[0,15],[15,23],[23,31],[31,40]],
					cols : [[0,11],[11,24],[24,33],[33,42]]
				};
				return data;
			};
			var coordGrid = coordsGrid(buildFunc);
			coordGrid.build();
			
			//Act
			var rect = coordGrid.rect(1,1,2,1,{top:1,left:2});
			
				//Assert
			var expectedCoord = { 
				top: 15 - 1, 
				left: 11 - 2, 
				width : 24 - 11, 
				height : 31 - 15 
			};
			
			expect(rect).toEqual(expectedCoord);
			
		});
	});
	
});