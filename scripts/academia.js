function formatanumero(numero) {
  return numero.toFixed(2).replace(".", ","); //faz o arredondamento
}
function trocaparavirgula(virgula){
  return virgula.replace("." , ",") 
}
function trocaparaponto(ponto){
  return ponto.replace("," , ".") 
}

function preencher() {
  var nome = inputNome.value;
  var idade = inputIdade.value;
  var nascimento = inputNascimento.value.split("-").reverse().join("/");
  var altura = trocaparaponto(inputAltura.value);
  var altura2 = trocaparavirgula(inputAltura.value);
  var peso = trocaparaponto(inputPeso.value);
  var peso2 = trocaparavirgula(inputPeso.value);
  var condicao = inputCondicao.value.toUpperCase();
  
  if (condicao == "SIM") {
    msg1 = "Precisa de acompanhamento médico.";
  } else {
    msg1 = "NÃO PRECISA de acompanhamento médico.";
  }

  imc = formatanumero(peso / (altura * altura));
  if (imc <= "17") {
    aviso = "IMC abaixo de 17 - Muito abaixo do peso.";
  } else if ("17" <= imc && imc < "18.49") {
    aviso = "IMC Entre 17 e 18.49 - Abaixo do peso.";
  } else if ("18.5" < imc && imc < "24.99") {
    aviso = "IMC Entre 18.5 e 24.99 - Peso normal.";
  } else if ("25" < imc && imc < "29.99") {
    aviso = "IMC Entre 25 e 29.99 - Acima do peso.";
  } else if ("30" < imc && imc < "34.99") {
    aviso = "IMC Entre 30 e 34.99 - Obesidade I.";
  } else if ("35" < imc && imc < "39.99") {
    aviso = "IMC Entre 35 e 39.99 - Obesidade II (Severa).";
  } else if (imc > "40") {
    aviso = "IMC Acima de 40 - Obesidade III (Mórbida).";
  }

  lista.innerHTML = `<li> Nome: ${nome}.</li>
  <li> Idade: ${idade}.</li>
  <li> Data Nascimento: ${nascimento}.</li>
  <li> Altura: ${altura2} m.</li>
  <li> Peso: ${peso2} kg.</li>
  <li> Tem condição pré-existente: ${condicao}.</li>
  <ul>
    <li> ${msg1}</li>
  </ul>
  <li> IMC = ${imc}</li>
  <ul>
    <li> ${aviso}</li>
  </ul>`;
}