const fs = require('fs');

fs.readFile('./content/info.txt', 'utf-8',(err, data) => {
    if (err) {
        console.log(err);
    }else{
        console.log(data);
    }
});

fs.writeFile('./content/second.txt', 'This is the new text', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});