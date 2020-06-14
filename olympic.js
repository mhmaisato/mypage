//calculo das quantidades de olimpiadas ocorridas
function calculate() {
	var first_year = 1896;
	var last_year = inputLastYear.value;
	var qtd = Math.trunc((last_year-first_year)/4)+1;
	if(last_year == 1916){
		qtd=qtd-1;
	}
	else if(last_year == 1940){
		qtd=qtd-2;
	}
	else if(last_year >= 1944){
		qtd=qtd-3;
	}

	result.innerHTML = `From ${first_year} to ${last_year} were performed ${qtd} olympic games.`
}
