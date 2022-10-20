function ppdf(page, props){
    "use strict";
    page.viewportSize = { width: 800, height: 1080 };

    page.content = props.body;
    page.settings.dpi = "110";

    page.paperSize = {
        format: 'A4',
        orientation: 'portrait',
        margin: '2cm'
    }
    var selector = 'body';

    page.clipRect = page.evaluate(function(selector) {
		return document.querySelector(selector).getBoundingClientRect();
	}, selector);

    var filename = page.title  + '.pdf'
    page.onLoadFinished = function(status) {
        console.log('Status: ' + status);
        page.render(filename);
    };
    return filename;
}

module.exports = ppdf;
