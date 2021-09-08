const fs = require('fs');

const textIn = fs.readFileSync("./txt/input.txt","utf-8");

// console.log(textIn);

const textOut = `This is what we know about avocado: ${textIn}. \n Created on ${Date.now()} `;
fs.writeFileSync("./txt/Output.txt", textOut);
console.log(textOut);