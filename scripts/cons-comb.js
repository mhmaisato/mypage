function formatanumero(numero) {
    return numero.toFixed(2).replace(".", ","); //faz o arredondamento
  }
  function trocaparavirgula(virgula){
    return virgula.replace("." , ","); 
  }
  function trocaparaponto(ponto){
    return ponto.replace("," , "."); 
  }

function calcular() {
    var Kml = trocaparaponto(inputKml.value);
    var TempoViagem = trocaparaponto(inputTempoViagem.value);
    var VelocMedia = trocaparaponto(inputVelocMedia.value);
    var Preco = trocaparaponto(inputPreco.value);
    km_rodados = VelocMedia * TempoViagem;
    litros_combustivel = km_rodados / Kml;
    litros_combustivel1=formatanumero(litros_combustivel)
    gasto = formatanumero(litros_combustivel * Preco);
    TempoViagem1 = trocaparavirgula(TempoViagem);

    resultado.innerHTML = `Em uma viagem de ${TempoViagem1} horas, seu carro consumiu ${litros_combustivel1} litros de combustível e custou R$${gasto}.`
}