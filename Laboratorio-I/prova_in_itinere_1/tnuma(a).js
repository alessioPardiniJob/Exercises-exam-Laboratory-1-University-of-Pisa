/*Si scriva una funzione tnum(a) che, ricevuto come argomento un array a, con elementi qualunque (fra cui altri array), 
restituisca il numero totale di numeri presenti nell'array o negli array in esso contenuti, ignorando ogni altro elemento.

Esempio

tnum([1,4, [2, 3, true], ["pippo",0], 5, [123, [3.14, {a: 1}]]]) → 8*/

function tnum(a){
    let i;
    let j; //variabile per scorrere gli array interni
    let c = 0; //contatore
    for( i = 0; i < a.length; i++){
        if(typeof(a[i]) == "number"){
            c++;
        }
        if(a[i] instanceof Array){ //verifica se l'elemento in questione sia un array, potevo anche verificarlo in questo modo: Object.prototype.toString.call(a[i]) === '[object Array]'
            c += tnum(a[i]); //richiamo ricorsivamente la funzione sull'elemento array
        }
    }
    return c;
}

console.log(tnum([1,4, [2, 3, true], ["pippo",0], 5, [123, [3.14, {a: 1}]]]));