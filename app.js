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


const fs = require('fs');

function getText(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data)=>{
            if (err) {
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

getText('./content/info.txt')
.then((result => console.log(result)))
.catch((err) => console.log(err));














