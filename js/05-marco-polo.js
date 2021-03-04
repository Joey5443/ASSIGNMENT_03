for (let i = 0; i <= 100; i++) {
    if( i%3 === 0 && i%5 !== 0 ) {
      console.log("Marco!")
    }
    if( i%5 === 0 && i%3 !== 0 ) {
      console.log("Polo!")
    }
    if( i%3 === 0 && i%5 === 0 ) {
      console.log("Marco! Polo!")
    }
  }