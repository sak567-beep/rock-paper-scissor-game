let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const getComputerChoice= () =>{
    const options=["rock","paper","scissors"];
  const idx= Math.floor( Math.random()*3);
  return options[idx];

}
const drawGame=()=>{
    console.log("game was drawn");
    msg.innerText="Game was Draw! Play Again."
    msg.style.backgroundColor ="#081b31";
}
const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose!"); 
        msg.innerText=`You lose ${compChoice} beats your  ${userChoice} ` ;
        msg.style.backgroundColor ="red"; 
    }
}
const playGame=(userChoice)=>{
console.log(userChoice);
const compChoice=getComputerChoice();
console.log(compChoice);
if(userChoice===compChoice){
drawGame();
}
else{
let userWin= true;
if(userChoice==="rock"){
   userWin =compChoice==="paper"? false:true;
}
   else if(userChoice==="paper"){
userWin=compChoice==="scissors"?  false:true;
   }
   else{
   userWin= compChoice==="sock"?false:true;
   }
showWinner(userWin,userChoice,compChoice);
   }

}
choices.forEach((choice) =>{
    console.log(choice);
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
playGame(userChoice);

});
});