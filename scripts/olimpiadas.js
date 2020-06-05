//calculo das quantidades de olimpiadas ocorridas
function calcular() {
	var ano_inicial = 1896;
	var ano_final = inputAnoFinal.value;
	var qtd = Math.trunc((ano_final-ano_inicial)/4)+1;
	if(ano_final == 1916){
		qtd=qtd-1;
	}
	else if(ano_final == 1940){
		qtd=qtd-2;
	}
	else if(ano_final >= 1944){
		qtd=qtd-3;
	}

	resultado.innerHTML = `De ${ano_inicial} até ${ano_final} tivemos ${qtd} jogos olímpicos de verão.`
}
