const http = require("http")
const port = 3000;

const server = http.createServer((req, res) => {
    res.end(`<html>
                <head>
                     <meta charset="UTF-8"/>
                </head>
                <body>
                     <h1> NodeJs </h1>
                </body> 
             </html>`
    );
})

server.listen(port,()=>{
    console.log(`Server listening on ${port}`)
})