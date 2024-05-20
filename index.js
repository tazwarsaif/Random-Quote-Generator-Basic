const mathlib = require('./math');
const quotelib = require('./quote');

const app = {}

app.printQ = function printQ(){
    const arrayQ = quotelib.arrQ();
    const randomnumber = mathlib.getRandomNumber(1,arrayQ.length)
    console.log(arrayQ[randomnumber-1]);
}

app.indefiniteLoop = function indefiniteLoop() {
    setInterval(app.printQ, 1000);
}

app.indefiniteLoop();



