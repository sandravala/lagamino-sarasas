let rangeInputs = document.getElementsByClassName('formbox__field-range');

rangeInputs[0].addEventListener("input", function(){
	let value = rangeInputs[0].value > 14 ? 'daugiau, nei 14' : rangeInputs[0].value;
	label[1].text('Atostogų trukmė: ' + value + ' d.');
});

rangeInputs[1].addEventListener("input", function(){
	let value = rangeInputs[1].value > 25 ? 'daugiau, nei 25' : rangeInputs[1].value;
	label[2].text('Vidutinė temperatūra viešnagės metu: ' + value + '°C');
});
