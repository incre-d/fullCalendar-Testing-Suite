
function sectionRenderObject(cal, opt, tm, fcV){
"use strict";
	var t = {};
	
	var	calendar = cal;
	var	options = opt;
	var	theme = tm;
	var fcViews = fcV || [];
	
	function renderSection(position) {
		
		var e = $("<td class='fc-header-" + position + "'/>");
		var buttonStr = options.header[position];
		if (buttonStr) {
			$.each(buttonStr.split(' '), function(i) {
				
				if (i > 0) {
					e.append("<span class='fc-header-space'/>");
				}
				var prevButton;
				$.each(this.split(','), function(j, buttonName) {
					
					if (buttonName == 'title') {
						e.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>");
						if (prevButton) {
							prevButton.addClass(theme + '-corner-right');
						}
						prevButton = null;
					}else{
						var buttonClick;
						
						if (calendar[buttonName]) {
							buttonClick = calendar[buttonName]; // calendar method
						}
						else if (fcViews[buttonName]) {
							buttonClick = function() {
								button.removeClass(theme + '-state-hover'); // forget why
								calendar.changeView(buttonName);
							};
						}
						if (buttonClick) {
						var icon  =options.theme
							var icon = options.theme ? options.buttonIcons[buttonName] : null; // why are we using smartProperty here?
							var text = options.buttonText[buttonName]
							var button = $(
								"<span class='fc-button fc-button-" + buttonName + " " + theme + "-state-default'>" +
									(icon ?
										"<span class='fc-icon-wrap'>" +
											"<span class='ui-icon ui-icon-" + icon + "'/>" +
										"</span>" :
										text
										) +
								"</span>"
								)
								.click(function() {
									if (!button.hasClass(theme + '-state-disabled')) {
										buttonClick();
									}
								})
								.mousedown(function() {
									button
										.not('.' + theme + '-state-active')
										.not('.' + theme + '-state-disabled')
										.addClass(theme + '-state-down');
								})
								.mouseup(function() {
									button.removeClass(theme + '-state-down');
								})
								.hover(
									function() {
										button
											.not('.' + theme + '-state-active')
											.not('.' + theme + '-state-disabled')
											.addClass(theme + '-state-hover');
									},
									function() {
										button
											.removeClass(theme + '-state-hover')
											.removeClass(theme + '-state-down');
									}
								)
								.appendTo(e);
							if (!prevButton) {
								button.addClass(theme + '-corner-left');
							}
							prevButton = button;
						}
					}
				});
				if (prevButton) {
					prevButton.addClass(theme + '-corner-right');
				}
			});
		}
		return e;
	}
	
	t.render = renderSection;
	
	return t;
}


function headerObject(calendar, options, sectionRenderer, views) {
"use strict";
	var t = {};
	
	// locals
	var _options = options;
	var element = $([]);
	var tm = options.theme ? 'ui' : 'fc';	
	var _sectionRenderer = sectionRenderer || sectionRenderObject(calendar, options, tm, views);
	
	function render() {
		
		var sections = _options.header;
		if (sections) {
			element = $("<table class='fc-header' style='width:100%'/>")			
				.append(
					$("<tr/>")
						.append(_sectionRenderer.render('left'))
						.append(_sectionRenderer.render('center'))
						.append(_sectionRenderer.render('right'))
				);
			return element;
		}
	}
	
	
	function destroy() {
		element.remove();
	}
	
	function updateTitle(html) {
		element.find('h2')
			.html(html);
	}
	
	
	function activateButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.addClass(tm + '-state-active');
	}
	
	
	function deactivateButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.removeClass(tm + '-state-active');
	}
	
	
	function disableButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.addClass(tm + '-state-disabled');
	}
	
	
	function enableButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.removeClass(tm + '-state-disabled');
	}

    // exports
	t.render = render;
	t.destroy = destroy;
	t.updateTitle = updateTitle;
	t.activateButton = activateButton;
	t.deactivateButton = deactivateButton;
	t.disableButton = disableButton;
	t.enableButton = enableButton;
	
	return t;
}
