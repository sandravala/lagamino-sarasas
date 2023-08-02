console.log('reikia padaryti disabled visus input jeigu langas su print parametru');
let rangeInputs = document.getElementsByClassName('formbox__field-range');
let titles = document.getElementsByClassName('formbox__title');
let resultBlock = document.getElementsByClassName('has-result')[0];
window.location.search.includes('print_calculator') ? document.getElementsByClassName('has-result')[0].removeAttribute('id'): resultBlock.setAttribute('id', 'is-hidden');

window.location.search.includes('print_calculator') ? document.getElementsByClassName('button pdf')[0].setAttribute('data-name','12GM Daiktų sąrašas atostogoms') : null;
// jeigu print langas
// ištrinam pirmus keturis konteinerius
// pridedam  (arba keičiam?) divą su tekstu 12 GM daiktų sąrašas atostogoms
//document.querySelectorAll(".class1.class2"); cia - kad elementas turėtų visas nurodytas klases
// fieldset .formbox__container.has-result pirmas elementas [0] - title. ištrinam visai
// reikia pakoreguoti rezultato generavimą, kad kiekviena daiktų grupė eitų į bendrą div'ą

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

function pridetiPrintBtn() {
document.getElementsByClassName('formbox__title')[4].innerHTML = printBtn;
}

let buttonGenerate = document.getElementsByClassName('formbox__btn-calc')[0];
buttonGenerate.addEventListener("click", function(){
document.getElementsByClassName('has-result')[0].removeAttribute('id');
//pridetiPrintBtn();	
})

let buttonReset = document.getElementsByClassName('formbox__btn-reset')[0];
buttonReset.addEventListener("click", function(){
document.getElementsByClassName('has-result')[0].setAttribute('id', 'is-hidden');
titles[0].innerHTML = 'Atostogų trukmė: ';
titles[1].innerHTML = 'Vidutinė temperatūra viešnagės metu: ';
})

function rangesTouched() {
return !!touched;
}
