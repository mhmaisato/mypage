/*BMI CALCULATE
EQUATION WEIGHT DIVIDED BY THE HEIGHT SQUARED
*/
function formatnumber(number) {
	return number.toFixed(2).replace(".", ","); //change from . to ,
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


	if (bmi<=18.49) {
		message = "BMI below 18,50 : Underweight."
	}
	else if (18.5 < bmi && bmi < 24.99) {
		message = "BMI between 18,50 - 24,99 : Normal or Healthy Weight."
	}
	else if (25 < bmi && bmi < 29.99) {
		message = "BMI between 25 - 29,99 : Overweight."
	}
	else if (bmi > 30) {
		message = "Seu IMC está entre 30 e 34,99 : Obese."
	}
	
	result.innerHTML = `With ${weight2}kg and ${height2}m, your BMI is: ${bmi2}.`
	result2.innerHTML =`${message}`
}
