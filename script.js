function Game(userChoice) {
    var computerChoice = getComputerChoice();
  
    var result = "";
  
    if (userChoice ===computerChoice) {
      result = "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "You win!";
    } else {
      result = "You lose!";
    }
  
    document.getElementById('result').innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
  }
  
  function getComputerChoice() {
    var randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
      return 'rock';
    } else if (randomNum === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }