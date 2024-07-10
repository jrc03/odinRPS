var opciones = ["Piedra", "Papel", "Tijeras"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * opciones.length);
    let finalChoice = opciones[randomChoice];
    document.querySelector(".computerChoice").textContent= "Computer chose: " + finalChoice;
    console.log("Computer chose: " + finalChoice);
    return finalChoice;
}

function getPlayerChoice() {
    return new Promise((resolve) => {
        document.querySelectorAll(".btn-selector").forEach(button => {
            button.addEventListener("click", function() {
                const playerChoice = this.getAttribute('data-option');
                console.log("Player chose: " + playerChoice);
                document.querySelector(".humanChoice").textContent = "Player chose: " + playerChoice;
                resolve(playerChoice);
            });
        });
    });
}

const beats = document.querySelector("#beats");

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
        beats.textContent = "It's a tie!";
    } else if (
        (playerChoice === "Piedra" && computerChoice === "Tijeras") ||
        (playerChoice === "Papel" && computerChoice === "Piedra") ||
        (playerChoice === "Tijeras" && computerChoice === "Papel")
    ) {
        humanScore++;
        beats.textContent = "You won! " + playerChoice + " beats " + computerChoice;
        console.log("You won! " + playerChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        beats.textContent = "You lost! " + computerChoice + " beats " + playerChoice;
        console.log("You lost! " + computerChoice + " beats " + playerChoice);
    }
}

//Player and Computer scores (query)
let pScore =document.querySelector(".playerScore")
let cScore= document.querySelector(".computerScore");

// Mostrar los scores iniciales en pantalla
pScore.textContent = "Your Score: " + humanScore;
cScore.textContent = "   \n Computer Score: " + computerScore;

async function playGame() {
    alert("Select (Rock, Paper or Scissors!)");
    while (humanScore < 5 && computerScore < 5) {
        const playerChoice = await getPlayerChoice();
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        pScore.textContent = "Your Score: " + humanScore;
        cScore.textContent = "   \n Computer Score: " + computerScore;

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
function reload(){
location.reload();

}
document.querySelector("#reload").addEventListener("click", reload);

document.getElementById("playButton").addEventListener("click", playGame);
