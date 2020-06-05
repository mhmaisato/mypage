/*CÁLCULO DO IMC
FÓRMULA PESO DIVIDIDO PELA ALTURA AO QUADRADO
*/
function formatanumero(numero) {
	return numero.toFixed(2).replace(".", ","); //faz o arredondamento e troca . por ,
}
function trocaparavirgula(virgula) {
	return virgula.replace(".", ",");
}
function trocaparaponto(ponto) {
	return ponto.replace(",",".");
}

function calcular() {
	var peso = trocaparaponto(inputPeso.value);
	var altura = trocaparaponto(inputAltura.value);
	imc = (peso / (altura * altura));
	imc2 = formatanumero(imc);
	peso2 = trocaparavirgula(peso);
	altura2 = trocaparavirgula(altura);


	if (imc<=17) {
		aviso = "Seu IMC está abaixo de 17 - Você está Muito Abaixo do Peso."
	}
	else if (17 < imc && imc < 18.49) {
		aviso = "Seu IMC está entre 17 e 18,49 - Você está Abaixo Peso."
	}
	else if (18.5 < imc && imc < 24.99) {
		aviso = "Seu IMC está entre 18,50 e 24,99 - Você está com Peso Normal."
	}
	else if (25 < imc && imc < 29.99) {
		aviso = "Seu IMC está entre 25 e 29,99 - Você está Acima do Peso."
	}
	else if (30 < imc && imc < 34.99) {
		aviso = "Seu IMC está entre 30 e 34,99 - Você está com Obesidade I."
	}
	else if (35 < imc && imc < 39.99) {
		aviso = "Seu IMC está entre 35 e 39,99 - Você está com Obesidade II (Severa)."
	}
	else if (imc > 40) {
		aviso = "Seu IMC está acima de 40 - Você está com Obesidade III (Mórbida)."
	}

	resultado.innerHTML = `Com ${peso2}kg e ${altura2}m, seu IMC é de: ${imc2}.`
	resultado2.innerHTML =`${aviso}`
}
