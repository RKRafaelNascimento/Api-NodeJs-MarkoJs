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

}

module.exports = BookDao