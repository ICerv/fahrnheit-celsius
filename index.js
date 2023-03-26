const fahrnheit = prompt('Zadej teplotu ve stupnich Fahrnheita:');

const celsius = Math.round((5 * (fahrnheit - 32)) / 9);

// document.body.innerHTML += '<p>Teplota ve stupnich Celsius je: ' + celsius + '</p>'

document.body.innerHTML +=
  '<h1>' + fahrnheit + ' stupnu Fahrnheita = ' + celsius + ' stupnu Celsia';