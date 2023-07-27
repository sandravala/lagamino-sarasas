let rangeInputs = document.getElementsByClassName('formbox__field-range');
let titles = document.getElementsByClassName('formbox__title');
let resultBlock = document.getElementsByClassName('has-result')[0];
resultBlock.setAttribute('id', 'is-hidden');

let printBtn = 
`
<div class="formbox__actions_btns">
<div class="formbox__actions">
<button class="formbox__action-btn formbox__btn-link" id="formbox-btn-link-13">
<span class="cb-icon-link"></span>
<span class="cb__tooltip">Copy Link</span>
</button>
<div class="formbox__footer-separate">|</div>
<button class="formbox__action-btn formbox__btn-print" name="cb_view" value="13">
<span class="cb-icon-print"></span>
<span class="cb__tooltip">Print Result</span>
</button>
</div><input type="hidden" id="print_calculator_13" name="print_calculator_13" value="32701e0098"><input type="hidden" name="_wp_http_referer" value="/lagamino-turinys/"></div>
`;

let forma = document.getElementsbyClassName('formbox-wrapper')[0];


rangeInputs[0].addEventListener("input", function(){
	let value = rangeInputs[0].value > 14 ? 'daugiau, nei 14' : rangeInputs[0].value;
	titles[0].innerHTML = 'Atostogų trukmė: ' + value + ' d.';
});

rangeInputs[1].addEventListener("input", function(){
	let value = rangeInputs[1].value > 25 ? 'daugiau, nei 25' : rangeInputs[1].value;
	titles[1].innerHTML = 'Vidutinė temperatūra viešnagės metu: ' + value + '°C';
});

let buttonGenerate = document.getElementsByClassName('formbox__btn-calc')[0];
buttonGenerate.addEventListener("click", function(){
document.getElementsByClassName('has-result')[0].removeAttribute('id');
	forma.appendChild(printBtn);
})

let buttonReset = document.getElementsByClassName('formbox__btn-reset')[0];
buttonReset.addEventListener("click", function(){
document.getElementsByClassName('has-result')[0].setAttribute('id', 'is-hidden');
titles[0].innerHTML = 'Atostogų trukmė: ';
titles[1].innerHTML = 'Vidutinė temperatūra viešnagės metu: ';
})


