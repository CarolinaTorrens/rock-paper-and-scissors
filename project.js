console.log("hola");

const  ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

humanScore = 0;
computerScore = 0; 


function HumanChoice(){
    let Human_Choice 
    while(true){
    Human_Choice = prompt("Escoge piedra, papel o tijera");
    if (Human_Choice.toLowerCase()=== "piedra" ){
        return ROCK;
    }else if (Human_Choice.toLowerCase() === "papel"){
        return PAPER;
    }else if(Human_Choice.toLowerCase() === "tijera"){
       return SCISSORS;
    }else{
        alert("Opcion no valida. por favor escoger piedra papel o tijera.");
    }
    
   } 
}

function MachineChoice(){
    let Machine_Choice = Math.floor(Math.random()*3)+1;
    return Machine_Choice;

}



function gameplay(){
    for(let i = 0; i < 5; i++){
    let Human_Choice = HumanChoice();
    let Machine_Choice = MachineChoice();
    if(Human_Choice === Machine_Choice){
        console.log("es un empate") ;
        


}else{
    console.log("no es empate");
    console.log("tu eleccion: ", Human_Choice);
    console.log("la eleccion de la maquina: ", Machine_Choice);
   

    
    if(Human_Choice === ROCK && Machine_Choice === SCISSORS || Human_Choice === PAPER && Machine_Choice === ROCK || Human_Choice === SCISSORS && Machine_Choice === PAPER){
    console.log("GANASTE!")
    humanScore += 1;
    console.log( "humanScore= ", humanScore);
    }else{
       console.log("PERDISTE") 
       computerScore +=1;
       console.log( "computerScore= ", computerScore);
    }

    }
}

}


   
function decision() {
    if (humanScore > computerScore){
        console.log("felicitaciones ganaste el juego")
    }else if(humanScore < computerScore){
        console.log("Perdiste la partida")
    }else{
        console.log("es un empate")
    }

}




gameplay()

decision()



 
console.log("human score = ", humanScore, "computer Score =  ", computerScore )
// console.log(HumanChoice() + 3 );










