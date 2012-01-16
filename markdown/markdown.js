/* CREATE TOC */

function createTOC() {
	var toc = $("<ul></ul>").attr("id", "innertoc");
	var toBeTOCced = $(":header").each(function (index) {
		if ($(this).prop("tagName") != "H1") {
			var headerId = "header-" + index;
			$(this).before($("<a name=\"" + headerId + "\">"));
			toc.append($("<li class=\"" + $(this).prop("tagName") + "\"><a href=\"#" + headerId + "\">" + $(this).html() + "</a></li>"));
		}
	});
	return toc;
}


$(function () {
	$("body").children().first().after(createTOC());
});

