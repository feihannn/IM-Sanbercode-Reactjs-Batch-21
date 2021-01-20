// di index.js
var readBooks = require('./callback.js');
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
let i=0;
function carabaca(waktu,books){
    readBooks(waktu,books[i],function(check){
        if(check>0){
            i++;
            carabaca(check,books);
        }
    })
}
carabaca(10000,books);