function formatnumber(number) {
    return number.toFixed(2).replace(".", ","); //faz o arredondamento
  }
  function changetocomma(comma){
    return comma.replace("." , ","); 
  }
  function changetopoint(point){
    return point.replace("," , "."); 
  }

function calculate() {
    var Kml = changetopoint(inputKml.value);
    var TripDuration = changetopoint(inputTripDuration.value);
    var Speed = changetopoint(inputSpeed.value);
    var Price = changetopoint(inputPrice.value);
    distance = Speed * TripDuration;
    fuel_qty = distance / Kml;
    fuel_qty1=formatnumber(fuel_qty)
    cost = formatnumber(fuel_qty * Price);
    TripDuration1 = changetocomma(TripDuration);

    result.innerHTML = `In a trip of ${TripDuration1} hours, your car will spend ${fuel_qty1} fuel and it will cost R$${cost}.`
}