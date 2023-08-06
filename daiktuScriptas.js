let rangeInputs = document.getElementsByClassName('formbox__field-range');
let radioInputs = document.querySelectorAll('input[type=radio]');
let titles = document.getElementsByClassName('formbox__title');
let resultBlock = document.getElementsByClassName('has-result')[0];
let rangesTouched = 0;
let radiosTouched = 0;
let alertText = null;

function removeElement(element) {
    if (element) {
        element.remove();
    }
}

function getResultElement() {
	return document.getElementById('resultList');
}

function deleteResultTitle() {
	document.querySelectorAll('.formbox__container.has-result')[0].removeChild(document.querySelectorAll('.formbox__container.has-result')[0].firstChild);
};

	
resultBlock.setAttribute('id', 'is-hidden');

// cia istrinu result title, kad liktu tik saraso blokas
deleteResultTitle();

rangeInputs[0].addEventListener('input', function(){
	let value = rangeInputs[0].value > 14 ? 'daugiau, nei 14' : rangeInputs[0].value;
	titles[0].innerHTML = 'Atostogų trukmė: <span class="formbox__field-alert">' + value + ' d.</span>';
	rangesTouched = 1;
	removeElement(getResultElement());
});

rangeInputs[1].addEventListener('input', function(){
	let value = rangeInputs[1].value > 25 ? 'daugiau, nei 25' : rangeInputs[1].value;
	titles[1].innerHTML = 'Vidutinė temperatūra: <span class="formbox__field-alert">' + value + '°C</span>';
	rangesTouched = 1;
	removeElement(getResultElement());
});

for (let i = 0; i < radioInputs.length; i++) {
	radioInputs[i].addEventListener('change', function() {
		radiosTouched = 1;
		removeElement(getResultElement());
	})
}

function inputsTouched() {
	let allTouched = !!rangesTouched && !!radiosTouched;
	return allTouched;
}
		 
function getFirstWord(str) {
const wordsArray = str.trim().split(/\s+/);
    return wordsArray[0];
  }

const deleteIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 12 12">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`;

const addListItemInput = `<div class="is-hidden">
 			<input type="text">
				<button type="button" class="listBtn plusButton dont-print" style="background-color: #ffffff; color: #1c7f18; border: none;">
    					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 12 12">
					  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
					</svg>
    				</button>
			</div>
   			<div><button type="button" class="listBtn addButton dont-print" style="background-color: #ffffff; color: #1c7f18; border: none;">Pridėti</button></div>
  `;

function generuotiEilute(tekstas, i) {
	
	return `<div>
 			<input type="checkbox" id="${getFirstWord(tekstas) + i}" class="myCheckbox">
    				<label id="rLabel" for="${getFirstWord(tekstas) + i}">
					${tekstas}
     					<button type="button" class="listBtn minusButton dont-print" style="background-color: #ffffff; color: #a90909; border: none;">${deleteIcon}</button>
				</label>	
		</div>`;
}

function generuotiSarasa(array) {
	let daiktuKategorija = array['virsutiniai'] ? [...array['virsutiniai'], ...array['miego'], ...array['apatiniai'], ...array['aksesuarai'], ...array['avalyne']] : array;
	let container = '';
    for (let i = 0; i < daiktuKategorija.length; i++) {
        container += generuotiEilute(daiktuKategorija[i], i);
	}
	container += addListItemInput;
	
    return container;
}

function generateResult(rubaiSarasui, kita, dokumentai, asmensHigiena, technika, rankinisBagazas) {
	
	let result = 
	`<div class="formbox formbox__container has-result" id="resultList">
		<div class="formbox__body">
		  	<div class="formbox__field is-result">
			    	<div class="formbox__htmlBlock-result for-printing">
					<div class="result-grid-column">
						<div class="rHeader">APRANGA</div>
						<div>${generuotiSarasa(rubaiSarasui)}</div>
						<div class="rHeader">KITA</div>
						<div>${generuotiSarasa(kita)}</div>
					</div>
					<div class="result-grid-column">
						<div class="rHeader">DOKUMENTAI</div>
						<div>${generuotiSarasa(dokumentai)}</div>
						<div class="rHeader">ASMENS HIGIENA | MAKIAŽAS</div>
						<div>${generuotiSarasa(asmensHigiena)}</div>
					</div>
					<div class="result-grid-column">
						<div class="rHeader">TECHNIKA</div>
						<div>${generuotiSarasa(technika)}</div>
						<div class="rHeader">RANKINIS BAGAŽAS</div>
						<div>${generuotiSarasa(rankinisBagazas)}</div>
					</div>
				</div>
			</div>
		</div>
	</div>`;
	
	return result;
}

function strikethroughLabelsIfChecked() {

	const labels = document.querySelectorAll("label[for][id='rLabel']");
	
		labels.forEach(label => {
			const checkboxId = label.getAttribute("for");
			const checkbox = document.getElementById(checkboxId);
		
			if (checkbox) {
			checkbox.addEventListener("change", function() {
			        if (checkbox.checked) {
			          label.classList.add("strikethrough");
			        } else {				
			          label.classList.remove("strikethrough");
			        }
			      });
			    }
		});
};

function removeListItemIfMinusBtnClicked() {
	const minusButtons = document.querySelectorAll('.minusButton');

	minusButtons.forEach(btn => {
		btn.addEventListener('click', function() {
			btn.parentNode.remove();
		});
		
	});
}

// <link rel="stylesheet" href="https://www.12gm.lt/wp-content/themes/botiga/assets/css/styles.min.css?ver=2.1.1" media="all">
// <link rel="stylesheet" href="https://www.12gm.lt/wp-content/uploads/botiga/custom-styles.css?ver=1690386668" media="all">

// <link rel="stylesheet" href="https://www.12gm.lt/wp-content/plugins/calchub/assets/css/style-view.css" type="text/css" media="all">
// <link rel="stylesheet" href="https://www.12gm.lt/wp-content/plugins/calculator-builder/assets/css/calchub-min.css?ver=1.5.2" type="text/css" media="all">
// <link rel="stylesheet" href="https://sandravala.github.io/lagamino-sarasas/customStyle.css?ver=1.5.2" media="all">
// <link rel="stylesheet" href="https://sandravala.github.io/lagamino-sarasas/printStyle.css?ver=1" media="all">

function printData() {

	const newHead = 
		`<head>
		<!-- Metadata -->
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<title>Kelionės daiktų sąrašas</title>

    		<link rel="stylesheet" href="https://sandravala.github.io/lagamino-sarasas/printerStyles.css?ver=1" media="print">
    		<link rel="stylesheet" href="https://sandravala.github.io/lagamino-sarasas/printerStyles.css?ver=1" media="all">
		</head>
	  		<body>
	    		<div class="site-branding" style="text-align: center">
	        	<a href="https://www.12gm.lt/" class="custom-logo-link" rel="home"><img width="924" height="602" src="https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2.png" class="custom-logo lazyautosizes lazyloaded" alt="12 gerų mėnesių" decoding="async" data-src="https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2.png" data-srcset="https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2.png 924w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-300x195.png 300w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-768x500.png 768w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-920x599.png 920w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-575x375.png 575w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-380x248.png 380w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-420x274.png 420w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-800x521.png 800w" data-sizes="auto" data-eio-rwidth="924" data-eio-rheight="602" sizes="60px" srcset="https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2.png 924w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-300x195.png 300w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-768x500.png 768w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-920x599.png 920w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-575x375.png 575w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-380x248.png 380w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-420x274.png 420w, https://www.12gm.lt/wp-content/uploads/2023/03/cropped-logo-transparent-2-800x521.png 800w"></a>            
	            	</div>`;
	
	const dataToPrint = document.getElementsByClassName('for-printing')[0];

	const url = location.protocol + '//' + location.host + location.pathname;

	// if(window.open) {
	// newWin = window.open(url, "_blank");
	// newWin.document.write('<html lang="lt-LT">');
	// newWin.document.write(newHead);
	// newWin.document.write(dataToPrint.outerHTML);
	// newWin.document.write('</body></html>');
	// setTimeout(function() {
	// 	newWin.print();
	// 	//newWin.close();
	// }, 100);
	// } else {
	// 	window.print();
	// }

	newWin = window.open(url, "_blank");
	newWin.document.write('<html lang="lt-LT">');
	newWin.document.write(newHead);
	newWin.document.write(dataToPrint.outerHTML);
	newWin.document.write('</body></html>');
	
	setTimeout(function() {
		newWin.print();
		//newWin.close();
	}, 100);
	
}

function generateAlertOrResult() {
	alertText = inputsTouched() ?  '' : 'error';
}

function getAlert() {
	return alertText;
}
	
function getCalculationResult() {
	return alertText === null ? '' : alertText;
}

let buttonGenerate = document.getElementsByClassName('formbox__btn-calc')[0];
buttonGenerate.addEventListener("click", function(){
	generateAlertOrResult();
	strikethroughLabelsIfChecked();
	resultBlock.removeAttribute('id');
})

let buttonReset = document.getElementsByClassName('formbox__btn-reset')[0];
buttonReset.addEventListener("click", function(e){
	// resultBlock.setAttribute('id', 'is-hidden');
	titles[0].innerHTML = 'Atostogų trukmė: ';
	titles[1].innerHTML = 'Vidutinė temperatūra: ';
	removeElement(getResultElement());
	alertText = null;
	rangesTouched = 0;
	radiosTouched = 0;
})

function handleScroll() {
let buttonDiv = document.getElementById('print-btn-div');
let pageYOffset = window.pageYOffset;

// If the pageYOffset is larger than 300, add the "hidden" class to the button
if (buttonDiv) {
	if ( pageYOffset > 300) {
	buttonDiv.classList.remove('is-hidden');
	} else {
	buttonDiv.classList.add('is-hidden');
}}}

// Add the scroll event listener to the window object
window.addEventListener('scroll', handleScroll);
