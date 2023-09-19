//----------------------VARIABLES--------------------------------

const palabraMisteriosa = "ahola"; //RandomWordGenerator();  //carga una palabra random
let letraAProbar = "";
let tries = 5;
let palabraFinal = "";

//----------------------EJECUCION------------------------------------------------

do {
  letraAProbar = prompt("Ingrese una letra para adivinar la palabra: ");
  let matches = [];
  if (compararLetraConPalabra()) {
    let i = 0;
    while (i !== -1) {
      let index = palabraMisteriosa.indexOf(letraAProbar, i != 0 ? i+1 : i );
      if (index !== -1 && i!= index) {
        matches.push(index);
      }
      i = index;
    }
  }
  if (matches.length > 0) {
    alert("se encontro la letra en la posicion: " + matches);
  } else {
    tries -= 1;
    alert( "No se encuentra esa letra, se le resta un intento, le quedan: " + tries
    );
  }
} while (tries > 0 && todasLasLetrasEnPalabraM());

if (todasLasLetrasEnPalabraM() && tries >= 0) {
  alert("Has adivinado!, la palabra secreta era: " + palabraMisteriosa);
} else {
  alert(
    "Te has quedado sin tries, la palabra secreta era: " + palabraMisteriosa
  );
}

//-----------------------------FUNCIONES-----------------------------

function todasLasLetrasEnPalabraM() {
  for (var i = 0; i < palabraMisteriosa.length; i++) {
    if (palabraFinal.includes(palabraMisteriosa[i])) {
      return false; // Si encuentra una letra que falta, devuelve false
    }
  }
  return true; // Si recorrió todo el bucle sin encontrar ninguna letra faltante, devuelve true
}

/*
//a mejorar

function todasLasLetrasEnPalabraM(palabraOriginal, letrasIngresadas) {
  let palabraCompleta = false;

  for (var i = 0; i < palabraOriginal.length; i++) {
    if (!letrasIngresadas.includes(palabraOriginal[i])) {
      palabraCompleta = false;
    } else {
      palabraCompleta = true;
    }

    return palabraCompleta;
  }
}

*/

function compararLetraConPalabra() {
  let result = palabraMisteriosa.includes(letraAProbar);

  if (result) {
    return result;
  } else {
    return false;
  }
}

function RandomWordGenerator() {
  let result = "";
  const words = [
    "hola",
    "chau",
    "misterio",
    "Programacion",
    "logica",
    "sistemas",
    "metodologia",
    "ingles",
    "algebra",
    "analisis",
    "edi",
  ];
  result = words[Math.floor(Math.random() * words.length)];
  return result;
}
