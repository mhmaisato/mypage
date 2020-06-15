function calculate() {
    var age = inputAge.value;
    beat_min = 75;
    beat_year = beat_min * 60 * 365;
    beat_life = beat_year * age;

    result.innerHTML = `With ${age} years your heart has already beat ${beat_life} times.`
}

