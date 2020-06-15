//calculo das quantidades de olimpiadas ocorridas
function calculate() {
	var first_year = 1896;
	var last_year = inputLastYear.value;
	var qtd = Math.trunc((last_year-first_year)/4)+1;
	if(last_year == 1916){
		qtd=qtd-1;
		msg="In 1916 Olympic Games not occured."
	}
	else if(last_year == 1940){
		qtd=qtd-2;
		msg="In 1916 and 1940 Olympic Games not occured."
	}
	else if(last_year >= 1944){
		qtd=qtd-3;
		msg="In 1916, 1940 and 1944 Olympic Games not occured."
	}

	result.innerHTML = `From ${first_year} to ${last_year} were performed ${qtd} olympic games.`
	result2.innerHTML = `${msg}`
}
