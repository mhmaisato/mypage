/*BMI CALCULATE
EQUATION WEIGHT DIVIDED BY THE HEIGHT SQUARED
*/
function formatnumber(number) {
	return number.toFixed(2).replace(".", ","); //change . to ,
}
function changetocomma(comma) {
	return comma.replace(".", ",");
}
function changetopoint(point) {
	return point.replace(",",".");
}

function calculate() {
	var weight = changetopoint(inputWeight.value);
	var height = changetopoint(inputHeight.value);
	bmi = (weight / (height * height));
	bmi2 = formatnumber(bmi);
	weight2 = changetocomma(weight);
	height2 = changetocomma(height);


	if (bmi<=17) {
		message = "Seu IMC está abaixo de 17 - Você está Muito Abaixo do Weight."
	}
	else if (17 < bmi && bmi < 18.49) {
		message = "Seu IMC está entre 17 e 18,49 - Você está Abaixo Weight."
	}
	else if (18.5 < bmi && bmi < 24.99) {
		message = "Seu IMC está entre 18,50 e 24,99 - Você está com Weight Normal."
	}
	else if (25 < bmi && bmi < 29.99) {
		message = "Seu IMC está entre 25 e 29,99 - Você está Acima do Weight."
	}
	else if (30 < bmi && bmi < 34.99) {
		message = "Seu IMC está entre 30 e 34,99 - Você está com Obesidade I."
	}
	else if (35 < bmi && bmi < 39.99) {
		message = "Seu IMC está entre 35 e 39,99 - Você está com Obesidade II (Severa)."
	}
	else if (bmi > 40) {
		message = "Seu IMC está acima de 40 - Você está com Obesidade III (Mórbida)."
	}

	result.innerHTML = `Com ${weight2}kg e ${height2}m, seu IMC é de: ${bmi2}.`
	result2.innerHTML =`${message}`
}
