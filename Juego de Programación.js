/*const palabra = "APROBAR";
const adivinar = " ";
let intentos = 3;
const letra = "ABCDEFGHIJKLMNÑOPQRSTIVWXYZ"; // letra no se usa?
let pregunta = 0;

while (intentos > 0 && adivinar !== palabra) {
  pregunta = prompt("Ingrese una letra para adivinar la palabra: ");

  if (palabra.indexOf(pregunta) != -1) {    
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] == pregunta) {
            alert ("Esta la letra: " + pregunta + " en la posicion: " + i+1);
        // Tambien avisa si hay mas de una de esas letras
         //Deberia avisar y sustituir, DEBERIA!!
      } else {
    intentos -= 1;
    //pregunta += 1;
    alert("No se encuentra esa letra, se le resta un intento, le quedan: " + intentos );
  }
}
  }
}

/* Todo deberia estar adentro de un for o while??, para que re reitere hasta
    completar la palabra o se queden sin intentos.
    Ademas de mostrar de alguna manera como se van completando las casillas
    
    Hay que usar return ya sé
   







*/
//----------------------VARIABLES--------------------------------

const palabraMisteriosa = RandomWordGenerator();  //carga una palabra random
let letraAProbar = "";
let intentos = 5;
let palabraFinal = "";


//----------------------EJECUCION------------------------------------------------


while (intentos > 0 && todasLasLetrasEnPalabraM(palabraMisteriosa, palabraFinal)) {
  
  letraAProbar = prompt("Ingrese una letra para adivinar la palabra: ");

  if (compararLetraConPalabra(letraAProbar, palabraMisteriosa)) {
    let i = 0
    while (i < palabraMisteriosa.length) {
      if (palabraMisteriosa[i] == letraAProbar) {
        alert("Esta la letra: " + letraAProbar + " en la posicion: " + i);
        palabraFinal += letraAProbar;       
      } else {
        intentos -= 1;
        i++;
        alert("No se encuentra esa letra, se le resta un intento, le quedan: " +intentos);
      }
    }
  }
}
if (
  todasLasLetrasEnPalabraM(palabraMisteriosa, palabraFinal) &&  intentos >= 0) {
  alert("Has adivinado!, la palabra secreta era: " + palabraMisteriosa);
} else {
  alert("Te has quedado sin intentos, la palabra secreta era: " + palabraMisteriosa);
}



//-----------------------------FUNCIONES-----------------------------


function todasLasLetrasEnPalabraM(palabraOriginal, letrasIngresadas) {
  for (var i = 0; i < palabraOriginal.length; i++) {
    if (!letrasIngresadas.includes(palabraOriginal[i])) {
      return false;                         // Si encuentra una letra que falta, devuelve false
    }
  }
  return true;                              // Si recorrió todo el bucle sin encontrar ninguna letra faltante, devuelve true
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


function compararLetraConPalabra(letra, palabraOriginal) {
  let result = palabraOriginal.includes(letra);

  if (result) {
    return result;
  } else {
    return false;
  }
}


function RandomWordGenerator() {
  
  let result = '';
      const  words = ["hola", "chau", "misterio", "Programacion", "logica","sistemas", "metodologia", "ingles", "algebra", "analisis", "edi"];
      result = words[Math.floor(Math.random() * words.length)];
      return result;
  }
  
  //export function