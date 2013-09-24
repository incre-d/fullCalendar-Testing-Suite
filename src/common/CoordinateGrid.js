
function coordsGrid(buildFunc) {
"use strict"
	var t = {};
	
	//exports
	t.build = build;
	t.cell = cell;
	t.rect = rect;	

	var data = {
	// rows and columns stored as pairs of {left, right} ; {top, bottom}
	// need only store as left positions, + outerWidth
		rows : [],
	    cols : []
		};
	
	var build = function() {		
		var ret = buildFunc();	
		data.rows = ret.rows;
		data.cols = ret.cols;
	};
	
	var cell = function(x, y) {
	
		var rowCnt = data.rows.length;
		var colCnt = data.cols.length;
		var i, r=-1, c=-1;
		for (i=0; i<rowCnt; i++) {
			if (y >= data.rows[i][0] && y < data.rows[i][1]) {
				r = i;
				break;
			}
		}
		for (i=0; i<colCnt; i++) {
			if (x >= data.cols[i][0] && x < data.cols[i][1]) {
				c = i;
				break;
			}
		}
		return (r>=0 && c>=0) ? { row:r, col:c } : null;
	};
	
	
	var rect = function(row0, col0, row1, col1, origin) { // row1,col1 is inclusive
		
		return {
			top: data.rows[row0][0] - origin.top,
			left: data.cols[col0][0] - origin.left,
			width: data.cols[col1][1] - data.cols[col0][0],
			height: data.rows[row1][1] - data.rows[row0][0]
		};
	};
	
	
	return t;
}
