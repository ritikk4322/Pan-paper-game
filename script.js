let userScore=0;
let computerScore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id")
       playGame(choiceId);
    });
});

const playGame=(choiceId)=>{
    const comChoice=genComChoice();
    if(choiceId===comChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(choiceId==="rock"){
         userWin=comChoice==="paper"? false: true;
        }
        else if(choiceId==="paper"){
            userWin=comChoice==="scissors"? false:true;
        }
        else{
            userWin=comChoice==="rock"? false:true;
        }
        winnerGame(userWin, choiceId, comChoice);
    }   
};

const drawGame=()=>{
    msg.innerText="Game was draw, play again";
    msg.style.background="#000";
}

const winnerGame=(userWin, choiceId, comChoice)=>{
    if(userWin)
        {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win the Game! Your ${choiceId} beats ${comChoice}`;
        msg.style.background="green";
    }
    else{
        computerScore++;
        compScorePara.innerText=computerScore;
        msg.innerText=`You loss the Game! ${choiceId} beats  You ${comChoice}`;
        msg.style.background="red";
    }
};

const genComChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx= Math.floor(Math.random()*3);
    return options[ranIdx];
};