
let rand_num = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;
let history = [];
let bestScore = null;

function check(){

  let input = document.getElementById("inp-num");
  let msg = document.getElementById("msg");
  let btn = document.getElementById("btn");
  let historyBox = document.getElementById("history");
  let bestBox = document.getElementById("best");


  if(gameOver){
    rand_num = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;
    history = [];

    msg.innerHTML = " New Game Started!";
    historyBox.innerHTML = "Guess History: None";

    input.value = "";
    btn.innerHTML = "Check";
    return;
  }

  let value = input.value;

  if(value == ""){
    msg.innerHTML = " Please enter a number!";
    return;
  }

  let guess = Number(value);
  attempts++;
  history.push(guess);

  historyBox.innerHTML = "Guess History: " + history.join(", ");

  if(guess < rand_num){
    msg.innerHTML = "Please Try Higher Number!";
  }
  else if(guess > rand_num){
    msg.innerHTML = "Please Try Lower Number!";
  }
  else{
    msg.innerHTML = ` Correct! You won in ${attempts} attempts!`;

    // Best score update
    if(bestScore == null || attempts < bestScore){
      bestScore = attempts;
      bestBox.innerHTML = "Best Score: " + bestScore;
    }

    btn.innerHTML = "Start New Game";
    gameOver = true;
  }

  input.value = "";
}
