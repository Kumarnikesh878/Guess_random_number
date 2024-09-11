const max = prompt("Enter the max number");
const random = Math.floor(Math.random () * max) +1;
let guess = prompt("guess the number");
while(true){
    if(guess==" quit "){
        console.log("user quit");
        break;
    }
    if(guess== random){
        console.log("Youo are right! Congrates!");
        break;
    } else if(guess < random){
        guess = prompt("Your guess are too Small! plz try again")
    } else{
        guess = prompt("Your guess are too Large! plz try again")
    }
}