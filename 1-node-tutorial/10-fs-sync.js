const fs = require('fs');

const read = fs.readFileSync('./content/info.txt', 'utf8');

fs.writeFileSync('./content/info.txt', 'This is a new text')
console.log(read);


