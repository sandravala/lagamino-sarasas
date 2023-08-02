console.log('form2');
let rangeInputs = document.getElementsByClassName('formbox__field-range');
let titles = document.getElementsByClassName('formbox__title');
let resultBlock = document.getElementsByClassName('has-result')[0];
let touched = 0;

let printBtn = `
<div class="formbox__actions_btns"><div class="formbox__actions">
					<button class="formbox__action-btn formbox__btn-link" id="formbox-btn-link-13">
					<span class="cb-icon-link"></span>
					<span class="cb__tooltip">Kopijuoti nuorodą</span>
					</button>
					<div class="formbox__footer-separate">|</div>
					<button class="formbox__action-btn formbox__btn-print" name="cb_view" value="13">
					<span class="cb-icon-print"></span>
					<span class="cb__tooltip">Spausdinti</span>
					</button>
				</div><input type="hidden" id="print_calculator_13" name="print_calculator_13" value="378024d43c"><input type="hidden" name="_wp_http_referer" value="/atostogos-ka-isideti-i-lagamina/"></div>
`;

function deleteResultTitle() {
	document.querySelectorAll('.formbox__container.has-result')[0].removeChild(document.querySelectorAll('.formbox__container.has-result')[0].firstChild);
};

	
resultBlock.setAttribute('id', 'is-hidden');

// cia istrinu result title, kad liktu tik saraso blokas
deleteResultTitle();

rangeInputs[0].addEventListener("input", function(){
	let value = rangeInputs[0].value > 14 ? 'daugiau, nei 14' : rangeInputs[0].value;
	titles[0].innerHTML = 'Atostogų trukmė: ' + value + ' d.';
	touched = 1;
});

rangeInputs[1].addEventListener("input", function(){
	let value = rangeInputs[1].value > 25 ? 'daugiau, nei 25' : rangeInputs[1].value;
	titles[1].innerHTML = 'Vidutinė temperatūra viešnagės metu: ' + value + '°C';
	touched = 1;
});


function rangesTouched() {
	return !!touched;
}

function printData() {
	const newHead = 
		`<head>
		<!-- Metadata -->
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<title>Kelionės daiktų sąrašas</title>
		<link rel="stylesheet" href="https://www.12gm.lt/wp-content/themes/botiga/assets/css/styles.min.css?ver=2.1.1" media="all">
		<link rel="stylesheet" href="https://www.12gm.lt/wp-content/uploads/botiga/custom-styles.css?ver=1690386668" media="all">

		<link rel="stylesheet" href="https://www.12gm.lt/wp-content/plugins/calchub/assets/css/style-view.css" type="text/css" media="all">
		<link rel="stylesheet" href="https://www.12gm.lt/wp-content/plugins/calculator-builder/assets/css/calchub-min.css?ver=1.5.2" type="text/css" media="all">
		<link rel="stylesheet" href="https://sandravala.github.io/lagamino-sarasas/customStyle.css?ver=1.5.2" media="all">
		<link rel="stylesheet" href="https://sandravala.github.io/lagamino-sarasas/printStyle.css?ver=1" media="all">
		</head>
	  		<body>
	    		<div class="site-branding" style="text-align: center">
	        	<a href="https://www.12gm.lt/" class="custom-logo-link" rel="home"><img width="924" height="602" src="https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2.png" class="custom-logo lazyautosizes lazyloaded" alt="12 gerų mėnesių" decoding="async" data-src="https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2.png" data-srcset="https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2.png 924w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-300x195.png 300w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-768x500.png 768w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-920x599.png 920w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-575x375.png 575w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-380x248.png 380w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-420x274.png 420w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-800x521.png 800w" data-sizes="auto" data-eio-rwidth="924" data-eio-rheight="602" sizes="60px" srcset="https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2.png 924w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-300x195.png 300w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-768x500.png 768w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-920x599.png 920w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-575x375.png 575w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-380x248.png 380w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-420x274.png 420w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-800x521.png 800w"></a>            
	                <p class="site-description" style="text-transform: uppercase">Daiktų sąrašas atostogoms</p>
	            	</div>`;
	
	const dataToPrint = document.getElementById('for-printing');

	const url = location.protocol + '//' + location.host + location.pathname;
	newWin = window.open(url, "_blank");
	newWin.document.write('<html lang="lt-LT">');
	newWin.document.write(newHead);
	newWin.document.write(dataToPrint.outerHTML);
	newWin.document.write('</body></html>');
	//newWin.print();
	//newWin.close();
}

let buttonGenerate = document.getElementsByClassName('formbox__btn-calc')[0];

buttonGenerate.addEventListener("click", function(){
	resultBlock.removeAttribute('id');
	resultBlock.setAttribute('id', 'for-printing');
	document.getElementById('for-printing').addEventListener('click',function(){
	printData();
	})
})

let buttonReset = document.getElementsByClassName('formbox__btn-reset')[0];
	buttonReset.addEventListener("click", function(){
	resultBlock.setAttribute('id', 'is-hidden');
	titles[0].innerHTML = 'Atostogų trukmė: ';
	titles[1].innerHTML = 'Vidutinė temperatūra viešnagės metu: ';
})
