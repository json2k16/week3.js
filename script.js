let playerPoint = 0;
let compPoint = 0;
const arrayChoices = ["rock" , "paper" , "scissors" ];

alert("This is a game of Rock, Paper and Scissors.")


const game = () => {
  for(let i = 1; i <= 5 ; i++){
    let playerSelection = userInput();
    let computerSelection = comptPlay();
    let j =+ 1;
    j = i;
    console.log(j++ , playGame(playerSelection.toLowerCase(), computerSelection));
  }
    if(playerPoint > compPoint){
      return "You won the game"
    }
    else if(playerPoint < compPoint){
      return "You suck at this"
    }
    else{
      return "You tied the game!";
    }
}

const comptPlay = () => {  
  const playRandom = Math.floor(Math.random() * arrayChoices.length);
  const computerRandom = arrayChoices[playRandom];
  return computerRandom;
}

const playGame = (playerSelection , computerSelection) => {
  if (playerSelection === computerSelection){
    return 'Tied game! Both players choose the same input';
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper'){
    compPoint++;
    return 'You lose!!!! Paper beats Rock';
  }
  else if (playerSelection === 'rock' && computerSelection === 'scissors' ){
    playerPoint++;
    return 'You won! Rock beats Scissors';
  }
  else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    playerPoint++;
    return 'You won! Scissors beats paper';
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    compPoint++;
    return 'You lose!! Rock beats scissors';
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock'){
    playerPoint++;
    return 'You won!!! Paper beats Rock';
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    compPoint++;
    return 'You lose!!! Scissors beats paper';
  }
}

let userInput = () => {
  let inputValid = false;
  while (!inputValid) {
      let playerSelection = prompt("Choose any of this 'rock', 'paper', or 'scissors'").toLowerCase().trim();
      if (arrayChoices.includes(playerSelection)) {
          inputValid = true;
          return playerSelection;
      } else {
          console.log("Your input was wrong. Please provide a valid input: 'rock', 'paper', or 'scissors'");
      }
  }
}

console.log(game());
