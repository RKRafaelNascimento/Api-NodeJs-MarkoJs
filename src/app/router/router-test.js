const db = require("../../config/database")
const bookDao = require("../dao/list-dao")
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
      const book = new bookDao(db)
        book.list().then((result) => {
            res.marko(require("../views/list.marko"), {
                books: result
            })
        }).catch(error => console.error(error))
    })

}

