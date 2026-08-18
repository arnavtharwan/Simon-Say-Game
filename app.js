let gameSeq =[];
let userSeq = [];

let btns = ["green" , "pink" , "purple" , "blue" ];
let started = false;
let level = 0;

let h2= document.querySelector("h2")

document.addEventListener("keypress" , function(){
    if(started==false){
        console.log("The game has Started");
        started = true;

        levelUp();
    }
});

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash") 
    }, 100)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash") 
    }, 100)
}

function levelUp(){
    level++;

    h2.innerText = `Level ${level}`

    let randomIdx = Math.floor(Math.random() * btns.length);
    let randColor  =btns[randomIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameflash(randbtn);

    gameSeq.push(randColor);
    console.log(gameSeq);

}

function checkAns(){

    let idx = userSeq.length - 1;

    if(gameSeq[idx] === userSeq[idx]){

        if(userSeq.length == gameSeq.length){
            console.log("Level Completed");
            userSeq = [];

            setTimeout(levelUp,1000);
        }

    }else{

        h2.innerText = `Game Over! Your score was ${level}. Press any key to restart.`;
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userflash(btn)
    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}