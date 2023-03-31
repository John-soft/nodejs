// npm - global command comes with node
// npm --version

// local dependency - use it only in this particular project

// npm i <packageName>

// global dependency - use it in any project

// npm install -g <packageName>
// sudo npm install -g <packageName>

// package.json - manifest file (stores important information about our project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step , press enter to skip)
// npm init -y (everything default)

// const lodash = require('lodash');

// const items = [1,[2,[3,[4]]]];

// const newItems = lodash.flattenDeep(items);
// console.log(newItems);
// console.log("Hello Fatherjohn");

// const fs = require('fs');

// console.log("Started first task");
// //Check file path

// fs.readFile('./content/info.txt', 'utf8',(err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }else{
//         console.log(data);
//         console.log("Completed the first task");
//     }
// });

// console.log('Starting next task');

//started operating system process
// console.log('first');
// setTimeout(()=>{
//     console.log('second');
// }, 0);
// console.log('third');
//completed and exited the operating process

// setInterval(() =>{
//     console.log("Hello world");
// }, 2000);

// console.log("I will run first");

// const http = require('http');

// const server = http.createServer((req, res) =>{
//     console.log('request event');
//     res.end('hello');
// }).listen(5000, ()=>{
//     console.log("Server listening on port : 5000....");
// });

// const fs = require('fs').promises;
// const util = require('util');

// function getText(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, 'utf8', (err, data)=>{
//             if (err) {
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// }

// async function start(){
//     try {
//         const first = await fs.readFile('./content/info.txt', 'utf-8');
//         console.log(first);
//     } catch (error) {
//         console.log(error);
//     }
// }
// start();

// getText('./content/info.txt')
// .then((result => console.log(result)))
// .catch((err) => console.log(err));

//Events in nodejs

// const EventEmitter = require('events');

// const customEmitter = new EventEmitter();

// customEmitter.on('response', () =>{
//     console.log('Data received...');
// });

// customEmitter.emit('response');

// const fs = require('fs');

// for (let i = 0; i < 10000; i++) {
//     fs.writeFileSync("./content/big.txt", `Hello world ${i}\n`, {flag: "a"});
// }

// const { createReadStream } = require("fs");

// const stream = createReadStream("./content/big.txt", {
//   highWaterMark: 90000,
//   encoding: "utf-8",
// });
// stream.on("data", (result) => {
//   console.log(result);
// });

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });

    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000, () => {
    console.log("Server started");
  });
