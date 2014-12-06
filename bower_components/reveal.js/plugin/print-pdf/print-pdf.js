/**
 * phantomjs script for printing presentations to PDF.
 *
 * Example:
 * phantomjs print-pdf.js "http://lab.hakim.se/reveal-js?print-pdf" reveal-demo.pdf
 *
 * By Manuel Bieh (https://github.com/manuelbieh)
 */

// html2pdf.js
var page = new WebPage();
var system = require( 'system' );

page.viewportSize  = {
	width: 1200,
	height: 768
};

page.paperSize = {
	format: 'letter',
	orientation: 'landscape',
	margin: {
		left: '0',
		right: '0',
		top: '0',
		bottom: '0'
	}
};

var revealFile = system.args[1] || 'index.html?print-pdf';
var slideFile = system.args[2] || 'slides.pdf';

if( slideFile.match( /\.pdf$/gi ) === null ) {
	slideFile += '.pdf';
}

console.log( 'Printing PDF...' );

page.open( revealFile, function( status ) {
	// page.render( slideFile );
	// phantom.exit();

    console.log(status);
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    } else {
        setTimeout(function () {
            console.log( 'Printed succesfully' );
            page.render(slideFile);
            phantom.exit();
        }, 1000); // Change timeout as required to allow sufficient time
    }
} );

