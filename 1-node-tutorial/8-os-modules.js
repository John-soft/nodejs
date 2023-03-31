const os = require('os');
console.log(os.platform());

//info about the current user
console.log(os.userInfo());

//Method returns the system uptime in seconds
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);