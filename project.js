console.log("hola");


// eleccion de la computadora 

function getComputerChoice (){
    let getComputer = Math.floor(Math.random()*3);
    let election;
    if (getComputer == 0){
        election ="Scissors"
        console.log(election);  
    } else if (getComputer == 1){
        election ="Rock"
        console.log(election);
    }else {
        election ="Paper"
        console.log(election);
    }
}

getComputerChoice(); 


// eleccion humana 

function getHumanChoice(){
    let electionHuman = prompt("choose Rock Paper or Scissors");
    console.log(electionHuman);
}

getHumanChoice();


// variables globales 

let humanScore = 0;
let computerScore = 0; 

