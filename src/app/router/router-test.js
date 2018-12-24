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
            res.marko(require("../views/list/list.marko"), {
                livros: result
            })
        }).catch(error => console.error(error))
    })

    app.get('/books/form',(req,res)=> {
        res.marko(require('../views/form/form.marko'),{livro: {}})
    })

    app.get('/books/form/:id', (req, resp) => {
        const id = req.params.id;
        const book = new bookDao(db)

        book.findById(id)
                .then(livro => 
                    resp.marko(
                        require('../views/form/form.marko'), 
                        { livro: livro }
                    )
                )
                .catch(erro => console.log(erro));
    });

    app.post('/books',(req,res)=>{

        const book = new bookDao(db)
            book.add(req.body).then(res.redirect('/list')).catch(error => console.error(error))

    })

    app.put('/books/:id', (req, resp) => {
        console.log(req.body);
        const book = new bookDao(db)
        
        book.update(req.params.id)
                .then(resp.redirect('/list'))
                .catch(erro => console.log(erro));
    });

    app.delete('/books/:id', (req, resp) => {
        const id = req.params.id;

        const book = new bookDao(db)
        book.remove(id)
                .then(() => resp.status(200).end())
                .catch(erro => console.log(erro));
    });

}

