const humanScore = document.getElementById("human-score");
const computerScore = document.getElementById("computer-score");
const pcIcon = document.getElementById("pc-icon");
const pcWord = document.getElementById("pc-word");
const roundInfo = document.getElementById("round-info");
const popupWindow = document.getElementById("popup-window");
const popResult = document.getElementById("pop-result");
const gameBoard = document.querySelector(".game-container");
let humanScoreCounter = 0;
let pcScoreCounter = 0;

const list = ["rock", "paper", "scissors"];

function computerChoice() {
  let pcRandomNumber = Math.floor(Math.random() * 3);
  return list[pcRandomNumber];
}

function getComputerImage(computerChoice) {
  switch (computerChoice) {
    case "rock":
      return "./rock.png";
    case "paper":
      return "./paper.png";
    case "scissors":
      return "./scissors.png";
  }
}

function updateComputer(computerChoice) {
  const imgSrc = getComputerImage(computerChoice);
  pcIcon.src = imgSrc;
  pcIcon.alt = computerChoice;
  pcWord.innerHTML = `${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
}

function getInfo(userChoice, pcChoice) {
  if (userChoice === pcChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && pcChoice === "scissors") ||
    (userChoice === "scissors" && pcChoice === "paper") ||
    (userChoice === "paper" && pcChoice === "rock")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

function updateScore(getInfo) {
  switch (getInfo) {
    case "It's a tie":
      break;

    case "You Win!":
      humanScoreCounter++;
      break;

    case "You Lose!":
      pcScoreCounter++;
      break;
  }
}

function playGame(userChoice) {
  let pcChoice = computerChoice();
  updateComputer(pcChoice);
  let roundResult = getInfo(userChoice, pcChoice);
  roundInfo.innerHTML = roundResult;
  updateScore(roundResult);
  humanScore.innerHTML = `Your Score: ${humanScoreCounter}`;
  computerScore.innerHTML = `Computer Score: ${pcScoreCounter}`;

  if (humanScoreCounter === 5) {
    popResult.innerHTML = "GG! YOU WON!";
    popupWindow.style.display = "flex";
    gameBoard.classList.add("blur");
  } else if (pcScoreCounter === 5) {
    popResult.innerHTML = "OPS! YOU LOST!";
    popupWindow.style.display = "flex";
    gameBoard.classList.add("blur");
  }
}

function resetScore() {
  humanScoreCounter = 0;
  pcScoreCounter = 0;
  humanScore.innerHTML = `Your Score: ${humanScoreCounter}`;
  computerScore.innerHTML = `Computer Score: ${pcScoreCounter}`;
}

function hideMessage() {
  popupWindow.style.display = "none";
  gameBoard.classList.remove("blur");
  resetScore();
}
