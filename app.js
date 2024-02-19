let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msgplay");

const userCount = document.querySelector("#user-score");
const compCount = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options = ["rock", "paper" , "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

showWinner = (userWin , userchoice, compChoice) => {
  if(userWin){
    userScore++;
    userCount.innerText = userScore;
    msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else
  { 
    compScore++;
    compCount.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats Your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
}

const drawGame = (userchoice) => {
  msg.innerText = `Game was Draw. both Choice ${userchoice} Play again!`;
  msg.style.backgroundColor = "#081b31";
}

const playGame = (userchoice) => {
  const compChoice = genCompChoice();
 
  if(userchoice === compChoice)
  {
    drawGame(userchoice);
  }
  else{

    let userWin = true;

    if(userchoice === "rock")
    {
      userWin = (compChoice === "paper") ? false : true;
    }
    else if(userchoice === "paper")
    {
      userWin = compChoice === "scissors" ? false : true;
    }
    else{ //userchoice === scissors
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userchoice,compChoice);
  }

}
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
    const userchoice = choice.getAttribute("id");
     playGame(userchoice);
    })
})
