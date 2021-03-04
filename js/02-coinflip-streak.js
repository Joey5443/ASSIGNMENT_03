let coinFlip;
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 1) {
        console.log("Tails!");
    } else {
        console.log("Head!");
    }

    console.log("coinFlip", coinFlip);
} while (coinFlip === 0); 