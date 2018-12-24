const express = require("express")
const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

app.get('/', (req, res) => {
    res.end(`<html>
            <head>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <h1> NodeJs </h1>
            </body> 
            </html>`
    )
})


app.get('/list', (req, res) => {
    res.end(`<html>
            <head>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <h1> List NodeJs </h1>
            </body> 
            </html>`
    )
})

