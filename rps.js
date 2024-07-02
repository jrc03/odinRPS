
// Pseudocode:
// Primero hacer un array con las opciones disponibles que tomara la pc (piedra, papel o tijeras). 
// Crear un array con las opciones del usuario (piedra, papel o tijeras).
// hacer una funcion para que le computador tenga una opcion del array de manera aleatoria
// lo mismo para el humano
// Luego hacer comparaciones a ver si quedaron empate o no.
// despues, ver si eligio tijeras (lo vence piedra), piedra(lo vence papel) y papel(lo vence tijeras)
//  hacer un sistema de "score" para ver cuantos puntos tiene cada uno.

var opciones= ["Piedra", "Papel", "Tijeras"];

function getComputerChoice(){
    let randomChoice= Math.floor(Math.random() * opciones.length + 1);
    let finalChoice= opciones[randomChoice];
    return finalChoice;
}

function getPlayerChoice(){
  
    return finalPlayerChoice;
}

let playerChoice= prompt("Piedra, Papel o Tijeras?");

let found= opciones.find( )

let finalPlayerChoice= opciones[playerChoice];
console.log(finalPlayerChoice);