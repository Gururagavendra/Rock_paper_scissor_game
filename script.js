//computerchoice
const arrayofnum = ['Rock','Paper','Scissors'];

const randomchoice=(arr)=>
{
  const randomNum=Math.floor(Math.random()*arrayofnum.length);

  const comchoice=arrayofnum[randomNum];

  return comchoice;
}



//gameon

const play=(computer,user)=>{
  let score=0;
  if (computer===user)
  {
    score=0;
  } else if (computer === 'Rock' && user === 'Scissors') {
    score = 1

  } else if (computer === "Paper" && user === "Rock") {
    score = 1

  } else if (computer === "Scissors" && user === "Paper") {
    score = 1

  // Otherwise human loses (aka set score to -1)
  } else {
    score = -1
  }

  return score;
}


//playerchoice
const onClickRPS=(playerchoice)=>
{
  const com= randomchoice(arrayofnum);
  const score = play(playerchoice.value,com);
  console.log(com);
  console.log(score);
  showresult(score,playerchoice.value,com);

}
//showresult
const showresult=(score,playerchoice,comchoice)=>
{
  let result=document.getElementById("result");

  
  switch (score) {
    case -1:
      result.innerText = `You Lose!`
      break;
    case 0:
      result.innerText = `It's a Draw!`
      break;
    case 1:
      result.innerText = `You Win!`
      break;
  }

  const playerScore = document.getElementById("player-score");
  
  playerScore.innerText = `${ score}`;
  let hands = document.getElementById('hands');

  hands.innerText=`${comchoice} vs ${playerchoice}`;

}


function playgame() {
let rpsButtons = document.querySelectorAll('.rpsButton');
rpsButtons.forEach(rpsButton => {
  rpsButton.onclick=()=>
  {console.log(rpsButton);
    onClickRPS(rpsButton);}
})
let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()


}
playgame();



const endGame=()=>{
  const playerScore = document.getElementById("player-score");
  result.innerText=' ';
  playerScore.innerText=' ';
  
}



