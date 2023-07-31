'use strict';

document.addEventListener( 'DOMContentLoaded', function () {

	const searchParam = new URLSearchParams(document.location.search);
	const formId = searchParam.get("cb_view");
	const dataJson = sessionStorage.getItem('cb_calculate_'+formId+'_print');
	const formObj = JSON.parse(dataJson);

	for (const key in formObj) {
		if (formObj[key]) {
			setInCalc(key, formObj[key]);
		}
	}

	function setInCalc(key, val) {
		if (key.includes('formbox-field')) {
			let el = document.querySelector('[name="' + key + '"]');
			let tag = el.tagName.toLowerCase();
			switch (tag) {
				case 'input':
				case 'select':
				case 'textarea':
					setFieldInput(el, key, val);
					break;

			}
			if(tag === 'textarea' && el.hasAttribute('hidden')) {
				el.nextElementSibling.innerHTML = val;
			}
		}

	}

	function setFieldInput(el, key, val) {
		let type = el.getAttribute('type') ? el.getAttribute('type') : false;
		switch (type) {
			case 'checkbox':
				el.setAttribute('checked', 'checked');
				break;
			case 'radio':
				let radio = document.querySelector('input[name="' + key + '"][value="' + val + '"]');
				radio.setAttribute('checked', 'checked');
				break;
			default:
				el.value = val;
				break;
		}

	}


	// Adds a listener to the "Download PDF" button on the HTML invoice.
	const button = document.querySelector( '.button.pdf' );
	if ( button ) {
		button.addEventListener( 'click', function () {
			cb_calc_do_html2pdf( document.body, button.getAttribute( 'data-name' ) );
		} );
	}
} );

/**
 * Initializes `html2pdf` to create and save the PDF file.
 * @param {string} source   The data/HTML for the PDF.
 * @param {string} filename The filename to use for saving the PDF.
 */
function cb_calc_do_html2pdf ( source, filename ) {
	html2pdf( source, {
		margin: 0,
		filename: filename,
		image: { type: 'jpeg', quality: 0.98 },
		html2canvas: { scale: 2 },
		jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
	} );
}
