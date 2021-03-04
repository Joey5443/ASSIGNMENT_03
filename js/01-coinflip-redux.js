let coinFlip;
let flip = window.prompt("How many flips would you like?");
for (let i = 1; i <= flip; i += 1 ){
    let coinFlip = Math.round(Math.random());
    if (coinFlip === 0){
        console.log("Heads!");
    }else{
        console.log("Tails!")
    }
}