/* CREATE TOC */

function createTOC() {
	var headers = $("h2, h3, h4, h5"),
		toc = $("<ul id='innertoc' style='display: none;'></ul>"),
		wrapper = $("<div id='toc'><h2>Table of contents <span>&#8675;</span><span style='display: none'>&#8673;</span></h2></div>").append(toc);
		wrapper.find('h2').click(function() {
			$('#innertoc').toggle();
			$('#toc h2 span').toggle();
		});
	if (!headers.length) {
		return false;
	}
	headers.each(function (index) {
		var $elem = $(this),
			headerId = $elem.attr('id');
		if (!headerId) {
			headerId = "header-" + index;;
			$elem.before($("<a name=\"" + headerId + "\">"));
		}
		toc.append($("<li class=\"" + $elem.prop("tagName") + "\"><a href=\"#" + headerId + "\">" + $elem.html() + "</a></li>"));
	});
	
	return wrapper;
}

$(function () {
	var toc = createTOC();
	if (toc) {
		$("body").children().first().after(toc);
	}
});

