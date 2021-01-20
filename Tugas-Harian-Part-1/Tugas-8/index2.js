var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
let i=0
function execute(time){
    readBooksPromise(time,books[i]).then(function(waktubaru){
        i++
        if (i<books.length){
            execute(waktubaru)
        }
    }).catch(function(err){
        console.log(err);
    })
}
execute(10000);