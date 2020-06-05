function calcular() {
    var idade = inputIdade.value;
    batimentos_por_min = 75;
    batimentos_ano = batimentos_por_min * 60 * 365;
    batimentos_vida = batimentos_ano * idade;

    resultado.innerHTML = `Com ${idade} anos seu coração já bateu ${batimentos_vida} vezes.`
}

