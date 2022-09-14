/**Si scriva una funzione JS extend(a,b) che, dati due oggetti a e b, 
 * restituisca un nuovo oggetto che ha tutte le proprietà di a e tutte quelle di b. 
 * Se a e b hanno qualche proprietà con lo stesso nome, prevale il valore contenuto in a. */

function extend(a,b){
    let nuovoOggetto = {};
    for(let k in a){
        nuovoOggetto[k] = a[k];
    }
    for(let k in b){
        if(!nuovoOggetto.hasOwnProperty(k)){
            nuovoOggetto[k] = b[k];
        }
    }
    return nuovoOggetto;
}

let a = {nome: "pippo", eta: 35};
let b={nome: "andrea", altezza: 200};
extend(a,b);