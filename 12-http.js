const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/') {
        console.log('Home page request');
        res.end("Welcome to the home page");
    }else if(req.url === '/about'){
        console.log('About page request');
        res.end("Here is the about page");
    }else{
        console.log('Unknown page request');
        res.end(`
        <h1>Error 404! Page not found</h1>
        <p>We can't seem to find the page you're looking for</p>
        <a href="/">Go to home </a>
        
        `)
    }
});

server.listen(5000, ()=>{
    console.log('Server started...');
});