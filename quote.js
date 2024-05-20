const fs = require('fs');

const quotes = {};

quotes.arrQ = function arrQ(){
    const everything  = fs.readFileSync(`${__dirname}/quotes.txt`,"utf8")
    let array = everything.split('\n');
    return array;

}


module.exports = quotes;