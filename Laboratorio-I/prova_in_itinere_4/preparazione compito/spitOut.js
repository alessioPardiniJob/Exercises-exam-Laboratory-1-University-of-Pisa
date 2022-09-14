/**Si scriva una funzione spitOut(a,p) che, dati come argomenti un array a e una funzione p, stampi tramite console.log() tutti gli elementi e di a tali che l’invocazione di p(e) restituisca true o un valore che viene promosso a true
Esempi
spitOut([12,7,14,0,561],e=>(e%3==0)) → stampa 12, 0, 561
spitOut([“la”,”vispa”,”teresa”,”solea”],e=>e.indexOf(“s”)) → stampa la, vispa, teresa
spitOut([31,3.1415, 1.4142, 7],e=>e==Math.round(e)) → stampa 31, 7 */

function spitOut(a,p){
    let i;
    for(i = 0; i < a.length; i++){
        if(p(a[i])){
            console.log (a[i]);
        }
    }
}

console.log(spitOut([12,7,14,0,561],e=>(e%3==0)))// → stampa 12, 0, 561
console.log(spitOut(["la","vispa","teresa","solea"],e=>e.indexOf("s")))// → stampa la, vispa, teresa
console.log(spitOut([31,3.1415, 1.4142, 7],e=>e==Math.round(e)))// → stampa 31, 7 */