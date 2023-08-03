console.log('print data debug 10');
import testFunction from 'https://sandravala.github.io/lagamino-sarasas/testScript.js';
testFunction();

let rangeInputs = document.getElementsByClassName('formbox__field-range');
let radioInputs = document.querySelectorAll('input[type=radio]');
let titles = document.getElementsByClassName('formbox__title');
let resultBlock = document.getElementsByClassName('has-result')[0];
let rangesTouched = 0;
let radiosTouched = 0;
let alertText = null;
let dienuSkaicius;
let temperatura;
let arSkalbs;


let marskiniuSkaicius = dienuSkaicius < 4 ? 2 : dienuSkaicius >= 4 & dienuSkaicius < 8 ? 3 : 4;
let kelniuSkaicius = dienuSkaicius < 4 ? 1 : dienuSkaicius >= 4 & dienuSkaicius < 8 ? 3 : arSkalbs? 3 : 4;
let megztiniuSkaicius = dienuSkaicius < 14 ? 1 : 2;
let kelnaiciuSkaicius = arSkalbs? Math.trunc(dienuSkaicius * 0.6) < 1 ? 1 : Math.trunc(dienuSkaicius * 0.6) : dienuSkaicius;
let liemeneliuSkaicius = arSkalbs? Math.trunc(dienuSkaicius * 0.6 * 0.8) < 1 ? 1 : Math.trunc(dienuSkaicius * 0.6) : Math.trunc(dienuSkaicius * 0.8) < 1 ? 1 : Math.trunc(dienuSkaicius * 0.8);
let marskineliuSkaicius = dienuSkaicius < 4 ? 2 : dienuSkaicius >= 4 & dienuSkaicius < 8 ? arSkalbs? 2 : 3 : arSkalbs? 2 : 4;

let rubai = [
	//minusine tempa
	{
		'virsutiniai': ['Striukė | Paltas 1 vnt.', 'Megztinis | Flisinis džemperis '  + megztiniuSkaicius + ' vnt.', 'Marškiniai | palaidinė ilgomis rankovėmis ' + marskiniuSkaicius + ' vnt.', 'Termo apranga '  + megztiniuSkaicius + ' vnt.', 'Kelnės ' + kelniuSkaicius + ' vnt.', 'Sportinė | laisvalaikio apranga 1 vnt.'],
	 'miego': ['Naktiniai | pižama 1 vnt.'],
	 'apatiniai': ['Kelnaitės ' + kelnaiciuSkaicius + ' vnt.', 'Liemenėlė ' + liemeneliuSkaicius + ' vnt.', 'Marškinėliai ' + marskineliuSkaicius + ' vnt.', 'Kojinės ' + kelnaiciuSkaicius + ' vnt.'],
	 'aksesuarai': ['Kepurė', 'Šalikas', 'Pirštinės', 'Rankinė | Delninė', 'Kuprinė', 'Papuošalai'],
	 'avalyne': ['Šlepetės', 'Šilti batai']
	},
	//0 - 9
	{
		'virsutiniai': ['Striukė | Paltas 1 vnt.', 'Megztukas | Švarkas '  + megztiniuSkaicius + ' vnt.', 'Marškiniai | palaidinė ilgomis rankovėmis ' + marskiniuSkaicius + ' vnt.', 'Termo apranga '  + megztiniuSkaicius + ' vnt.', 'Kelnės ' + kelniuSkaicius + ' vnt.', 'Sportinė | laisvalaikio apranga 1 vnt.'],
	 'miego': ['Naktiniai | pižama 1 vnt.'],
	 'apatiniai': ['Kelnaitės ' + kelnaiciuSkaicius + ' vnt.', 'Liemenėlė ' + liemeneliuSkaicius + ' vnt.', 'Marškinėliai ' + marskineliuSkaicius + ' vnt.', 'Kojinės ' + kelnaiciuSkaicius + ' vnt.'],
	 'aksesuarai': ['Kepurė', 'Šalikas', 'Pirštinės', 'Rankinė | Delninė', 'Kuprinė', 'Papuošalai'],
	 'avalyne': ['Šlepetės', 'Sportiniai batai', 'Batai']
	},
	//10 - 15
	{
		'virsutiniai': ['Striukė | Paltas | Lietpaltis 1 vnt.', 'Megztukas | Švarkas '  + megztiniuSkaicius + ' vnt.', 'Marškiniai | palaidinė ilgomis rankovėmis ' + marskiniuSkaicius / 2 + ' vnt.', 'Marškiniai | palaidinė trumpomis rankovėmis '  + marskiniuSkaicius / 2 + ' vnt.', 'Kelnės | sijonas ' + kelniuSkaicius + ' vnt.', 'Suknelė 1 vnt.', 'Sportinė | laisvalaikio apranga 1 vnt.'],
	 'miego': ['Naktiniai | pižama 1 vnt.'],
	 'apatiniai': ['Kelnaitės ' + kelnaiciuSkaicius + ' vnt.', 'Liemenėlė ' + liemeneliuSkaicius + ' vnt.', 'Marškinėliai ' + marskineliuSkaicius + ' vnt.', 'Kojinės ' + kelnaiciuSkaicius + ' vnt.'],
	 'aksesuarai': ['Šalikas | skara', 'Rankinė | Delninė', 'Kuprinė', 'Papuošalai'],
	 'avalyne': ['Šlepetės', 'Sportiniai batai', 'Bateliai | batai']
	},
	//16 - 24
	{
		'virsutiniai': ['Lengvas lietpaltis 1 vnt.', 'Megztukas | Švarkas '  + megztiniuSkaicius + ' vnt.', 'Marškiniai | palaidinė trumpomis rankovėmis '  + marskiniuSkaicius + ' vnt.', 'Kelnės | šortai | sijonas ' + kelniuSkaicius + ' vnt.', 'Suknelė 1 vnt.', 'Sportinė | laisvalaikio apranga 1 vnt.', 'Maudymosi kostiumėlis 1 vnt.'],
	 'miego': ['Naktiniai | pižama 1 vnt.'],
	 'apatiniai': ['Kelnaitės ' + kelnaiciuSkaicius + ' vnt.', 'Liemenėlė ' + liemeneliuSkaicius + ' vnt.', 'Marškinėliai ' + marskineliuSkaicius + ' vnt.', 'Kojinės ' + kelnaiciuSkaicius + ' vnt.'],
	 'aksesuarai': ['Skrybėlė | galvos apdangalas nuo saulės', 'Skara', 'Rankinė | Delninė', 'Kuprinė', 'Papuošalai'],
	 'avalyne': ['Šlepetės', 'Basutės | sandalai', 'Bateliai']
	},
	//25 ir daugiau
	{
		'virsutiniai': ['Megztukas | Švarkas '  + megztiniuSkaicius + ' vnt.', 'Marškiniai | palaidinė trumpomis rankovėmis '  + marskiniuSkaicius + ' vnt.', 'Kelnės | šortai | sijonas ' + kelniuSkaicius + ' vnt.', 'Suknelė 1 vnt.', 'Sportinė | laisvalaikio apranga 1 vnt.', 'Maudymosi kostiumėlis 1 vnt.'],
	 'miego': ['Naktiniai | pižama 1 vnt.'],
	 'apatiniai': ['Kelnaitės ' + kelnaiciuSkaicius + ' vnt.', 'Liemenėlė ' + liemeneliuSkaicius + ' vnt.', 'Marškinėliai ' + marskineliuSkaicius + ' vnt.', 'Kojinės ' + kelnaiciuSkaicius + ' vnt.'],
	 'aksesuarai': ['Skrybėlė | galvos apdangalas nuo saulės', 'Skara', 'Rankinė | Delninė', 'Kuprinė', 'Papuošalai'],
	 'avalyne': ['Šlepetės', 'Basutės | sandalai', 'Bateliai']
	}
]

let rubaiSarasui = temperatura < 0 ? rubai[0] : temperatura >= 0 || temperatura < 10 ? rubai[1] : temperatura >= 10 || temperatura < 16 ? rubai[2] : temperatura >= 16 || temperatura < 24 ? rubai[3] : rubai[4];

let dokumentai = ['Asmens dokumentas (tapatybės kortelė | pasas)', 'Draudimas', 'Rezervacijų (viešbučių, pramogų, transporto ir pan.) dokumentai | duomenys', 'Vairuotojo pažymėjimas (jei aktualu)', 'Grynieji (vietos valiuta)', 'Banko kortelės'];

let asmensHigiena = ['Dantų šepetėlis', 'Dantų pasta', 'Šampūnas', 'Kondicionierius', 'Kūno | veido prausiklis', 'Skustuvas', 'Kūno losjonas | kremas', 'Veido kremas', 'Dekoratyvinė kosmetika pagal poreikį', 'Pleistrai', 'Kvepalai', 'Plaukų šepetys', 'Gumytės ir segtukai plaukams', 'Apsauginis kremas nuo saulės'];


function generuotiEilute(tekstas) {
	return `<div><input type="checkbox" disabled><label id="rLabel">${tekstas}</label></div>`;
}

function generuotiSarasa(aprangosKategorija) {
	let container = '';
    for (let i = 0; i < aprangosKategorija.length; i++) {
        container += generuotiEilute(aprangosKategorija[i]);
	}
	    for (let i = 0; i < 2; i++) {
        container += generuotiEilute('................................................................');
	}
	
    return container;
}

function generuotiRezultata() {
	let rezultatuSarasas = 
			`
<div class="dont-print"></div>
<div class="print-btn dont-print">
<button type="button" style="background-color: #ffffff" id="custom-print-btn" onclick="printData()">
<i class="bi bi-printer"></i>
</button></div>
<div>
<div class="rHeader">APRANGA</div>
<div>${generuotiSarasa(rubaiSarasui['virsutiniai'])}</div>
<div>${generuotiSarasa(rubaiSarasui['miego'])}</div>
<div>${generuotiSarasa(rubaiSarasui['apatiniai'])}</div>
<div>${generuotiSarasa(rubaiSarasui['aksesuarai'])}</div>
<div>${generuotiSarasa(rubaiSarasui['avalyne'])}</div>
</div>

<div class="rHeader">DOKUMENTAI</div>
<div class="rHeader">ASMENS HIGIENA | MAKIAŽAS</div>
<div class="rHeader">TECHNIKA</div>
<div class="rHeader">KITA</div>
<div class="rHeader">RANKINIS BAGAŽAS</div>

			`
return rezultatuSarasas;
}


function deleteResultTitle() {
	document.querySelectorAll('.formbox__container.has-result')[0].removeChild(document.querySelectorAll('.formbox__container.has-result')[0].firstChild);
};

	
resultBlock.setAttribute('id', 'is-hidden');

// cia istrinu result title, kad liktu tik saraso blokas
deleteResultTitle();

rangeInputs[0].addEventListener('input', function(){
	temperatura = rangeInputs[0].value;
	let value = temperatura > 14 ? 'daugiau, nei 14' : temperatura;
	titles[0].innerHTML = 'Atostogų trukmė: ' + value + ' d.';
	rangesTouched = 1;
});

rangeInputs[1].addEventListener('input', function(){
	dienuSkaicius = rangeInputs[1].value;
	let value = dienuSkaicius > 25 ? 'daugiau, nei 25' : dienuSkaicius;
	titles[1].innerHTML = 'Vidutinė temperatūra viešnagės metu: ' + value + '°C';
	rangesTouched = 1;
});

for (let i = 0; i < radioInputs.length; i++) {
	radioInputs[i].addEventListener('change', function() {
		arSkalbs = radioInputs[i].value;
		radiosTouched = 1;
	})
}

function inputsTouched() {
	let allTouched = !!rangesTouched && !!radiosTouched;
	return allTouched;
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

function generateAlertOrResult() {
	alertText = inputsTouched() ?  null : 'error';
}

function getAlert() {
	return alertText;
}
	
function getCalculationResult() {
	
	return alertText === null ? generuotiRezultata() : alertText;
}

let buttonGenerate = document.getElementsByClassName('formbox__btn-calc')[0];

buttonGenerate.addEventListener("click", function(){
	//e.preventDefault();
	//e.stopPropagation();
	resultBlock.removeAttribute('id');
	resultBlock.setAttribute('id', 'for-printing');
	generateAlertOrResult();
})



// function addPrintOption() {
// 	document.getElementById('custom-print-btn').addEventListener('click', function() {
// 		printData();
// 	})
// }


let buttonReset = document.getElementsByClassName('formbox__btn-reset')[0];

buttonReset.addEventListener("click", function(e){
	e.preventDefault();
	resultBlock.setAttribute('id', 'is-hidden');
	titles[0].innerHTML = 'Atostogų trukmė: ';
	titles[1].innerHTML = 'Vidutinė temperatūra viešnagės metu: ';
})

