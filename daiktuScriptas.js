let rangeInputs = document.getElementsByClassName('formbox__field-range');
let titles = document.getElementsByClassName('formbox__title');
let resultBlock = document.getElementsByClassName('has-result')[0];
resultBlock.setAttribute('id', 'is-hidden');

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
})
