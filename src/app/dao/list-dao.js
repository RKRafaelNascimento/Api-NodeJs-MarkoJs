class BookDao {

    constructor(db){
        this._db = db
    }

    list(){
        return new Promise((resolve,reject)=>{
            this._db.all('SELECT * FROM livros',(error,result)=>{
                
                if(error) return reject(`Ocorreu um erro ${error}`);

                return resolve(result)
            })
        });  
    }

    add(book){
        return new Promise((resolve, reject) => {
            this._db.run('INSERT INTO livros (titulo,preco,descricao) values (?,?,?)',
                [book.titulo,book.preco,book.descricao],
                (error)=>{
                    if(error) return reject(`Ocorreu um erro ${error}`);
                     resolve()
                })
        })
    }

    findById(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM livros
                    WHERE id = ?
                `,
                [id],
                (erro, livro) => {
                    if (erro)  return reject(`Ocorreu um erro ${error}`);
                    
                    return resolve(livro);
                }
            );
        });
    }

    update(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE livros SET
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
            `,
            [
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ],
            erro => {
                if (erro)  return reject(`Ocorreu um erro ${error}`);
                resolve();
            });
        });
    }

    remove(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    DELETE 
                    FROM livros
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) return reject(`Ocorreu um erro ${error}`);     
                    return resolve();
                }
            );
        });
    }
}

module.exports = BookDao