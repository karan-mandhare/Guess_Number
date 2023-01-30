// Guess the number
let number = Math.floor((Math.random()*100)+1);
let chances = 10;
let guess;

console.log("This is a guessing game");
console.log("Enter a number between 1 to 100");

guess = prompt("Enter a number ");
console.log("You enter : ",guess);
--chances;
console.log("Your ramaining chance : ",chances);

do{
    if(guess > number){
        console.log("Your number is bigger.");
        guess = prompt("Enter again");
        --chances;
        console.log("You enter : ",guess);
        console.log("Your ramaining chance : ",chances);
    }
    else if(guess < number){
        console.log("Your number is smaller.");
        guess = prompt("Enter again");
        --chances;
        console.log("You entered : ",guess);
        console.log("Your ramaining chance : ",chances);
    }
}while(guess != number || chances == 0); // break the loop if guess number is equal.

let score = 10 - chances;

if(score == 0 ){
    console.log("You take more than 10 chances \n Sorry, You loss the game.");
}
else{
    console.log("\n\nCongratulation\nGenerated number was "+number+" and you guess it right\nYour take "+score+" chance to solve this");
}

