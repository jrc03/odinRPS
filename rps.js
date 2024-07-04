
// Pseudocode:
// Primero hacer un array con las opciones disponibles que tomara la pc (piedra, papel o tijeras). 
// Crear un array con las opciones del usuario (piedra, papel o tijeras).
// hacer una funcion para que le computador tenga una opcion del array de manera aleatoria
// lo mismo para el humano
// Luego hacer comparaciones a ver si quedaron empate o no.
// despues, ver si eligio tijeras (lo vence piedra), piedra(lo vence papel) y papel(lo vence tijeras)
//  hacer un sistema de "score" para ver cuantos puntos tiene cada uno.

var opciones= ["Piedra", "Papel", "Tijeras"];
let humanScore= 0;
let computerScore= 0;


function getComputerChoice(){
    let randomChoice= Math.floor(Math.random() * opciones.length);
    let finalChoice= opciones[randomChoice];
    console.log("Computer chose: " + finalChoice);
    return finalChoice;
}

function getPlayerChoice() {
    let playerChoiceLow = prompt("Piedra, Papel o Tijeras?").toLowerCase();
   let playerChoice = playerChoiceLow.charAt(0).toUpperCase() + playerChoiceLow.slice(1);

    if (opciones.includes(playerChoice) && playerChoice ) {
        console.log("You chose: " + playerChoice);
        return playerChoice;
    } else {
        console.log("Invalid choice. Please choose Piedra, Papel, or Tijeras.");
        return null;
    }
   
    
}


var playButton= document.getElementById("playButton");




function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (playerChoice === "Piedra" && computerChoice === "Tijeras") ||
        (playerChoice === "Papel" && computerChoice === "Piedra") ||
        (playerChoice === "Tijeras" && computerChoice === "Papel")
    ) {
        humanScore++;
        console.log("You won! " + playerChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        console.log("You lost! " + computerChoice + " beats " + playerChoice);
    }
    }

function playGame(){
   // loop to get both choices and validate the human choice.
while(humanScore < 5 && computerScore  < 5){

    let playerChoice= getPlayerChoice();
    if (playerChoice==null) {
        continue;
    }
    let computerChoice= getComputerChoice();
playRound(playerChoice, computerChoice);
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);

}
        
  

    if (humanScore === 5) {
        alert("¡Felicidades! Ganaste el juego con un puntaje de " + humanScore + " a " + computerScore);
    } else if (computerScore === 5) {
        alert("La computadora ganó el juego con un puntaje de " + computerScore + " a " + humanScore);
    }

    // Reiniciar el puntaje para poder jugar otra vez
    humanScore = 0;
    computerScore = 0;
    
    

}


playButton.addEventListener("click", playGame);

