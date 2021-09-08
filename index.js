const fs = require("fs");

// Blocking, Synchronous way:

// const textIn = fs.readFileSync("./txt/input.txt","utf-8");
// console.log(textIn);
// const textOut = `This is what we know about avocado: ${textIn}. \n Created on ${Date.now()} `;
// fs.writeFileSync("./txt/Output.txt", textOut);
// console.log(textOut);

// Non-Blocking, Asynchronous way:

// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
    console.log(data1);
    fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
        console.log(data2);
      });
      
  });
  

console.log("This has to run before.");