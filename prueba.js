//----------------------VARIABLES--------------------------------

const misteryWord = "hola"; //RandomWordGenerator();  genera palabra random
let testLetter = "";
let tries = 5;
let finalWord = "";

//----------------------EJECUCION------------------------------------------------

do {
  testLetter = prompt("Ingrese una letra para adivinar la palabra: ");
  let matches = [];
  if (compareLetterWithWord()) {
    let i = 0;
    while (i !== -1) {
      let index = misteryWord.indexOf(testLetter, i != 0 ? i+1 : i );
      if (index !== -1 && i!= index) {
        matches.push(index);
      }
      i = index;
    }
  }
  if (matches.length > 0) {
    //alert("se encontro la letra en la posicion: " + matches);
    console.log("se encontro la letra en la posicion: " + matches); // nuevo
  } else {
    tries -= 1;
    console.log( "No se encuentra esa letra, se le resta un intento, le quedan: " + tries
    );
    //alert( "No se encuentra esa letra, se le resta un intento, le quedan: " + tries );
  }
} while (tries > 0 && allCharsOnMisteryWord());

if (allCharsOnMisteryWord() && tries >= 0) {
  console.log( "Has adivinado!, la palabra secreta era: " + misteryWord);
  //alert("Has adivinado!, la palabra secreta era: " + misteryWord);
} else {
  console.log("Te has quedado sin tries, la palabra secreta era: " + misteryWord)
  /* alert( "Te has quedado sin tries, la palabra secreta era: " + misteryWord
  ); */
}

//-----------------------------FUNCIONES-----------------------------

function allCharsOnMisteryWord() {
  for (var i = 0; i < misteryWord.length; i++) {
    if (finalWord.includes(misteryWord[i])) {
      return false; // Si encuentra una letra que falta, devuelve false
    }
  }
  return true; // Si recorrió todo el bucle sin encontrar ninguna letra faltante, devuelve true
}

/*
//a mejorar

function allCharsOnMisteryWord(palabraOriginal, letrasIngresadas) {
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

function compareLetterWithWord() {

  return misteryWord.includes(testLetter); // no seria al reves? testLetter.includes(misteryWord) ????

  //se puede mejorar
    /* let result = misteryWord.includes(testLetter);

  if (result) {
    return result;
  } else {
    return false;
  } */
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
