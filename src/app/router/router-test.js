module.exports = (app) => {

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
        res.marko(require("../views/list.marko"), {
            books: [
                {
                    id:1,
                    title: "NodeJs"
                },
                {
                    id:2,
                    title: "React"
                }
            ]
        })
       
    })


}

