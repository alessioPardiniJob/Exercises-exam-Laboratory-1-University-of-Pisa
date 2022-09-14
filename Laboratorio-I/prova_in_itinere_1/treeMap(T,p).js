/**Si scriva una funzione treeMap(T,p) dove

-T è un albero k-ario non vuoto, implementato come definito a lezione (oggetti con chiavi "val" e "figli",
 dove "figli" è un array di nodi)

-un predicato p(pa,desc) che prende in input due argomenti pa e desc, e restituisce un booleano

La funzione applica il predicato p() all'etichetta del nodo corrente (argomento pa del predicato) 
e alle etichette dei nodi figli del corrente, impacchettate in un array desc passato come secondo 
argomento del predicato (le etichette devono essere inserite nell'array desc nello stesso ordine 
in cui i nodi compaiono nell'array dei figli). Il risultato dell'applicazione del predicato
va scritto come nuovo valore dell'etichetta del nodo corrente. La funzione deve applicare il predicato 
a tutti i nodi dell'albero, foglie incluse (in questo caso l'array desc sarà vuoto). */

function treeMap(T,p){
    let i;
    let sup = [];
    if(T.figli == undefined){
        T.val = p(T.val, []);
        return;
    }
    for( i = 0; i < T.figli.length; i++){
        sup.push(T.figli[i].val);
    }
    T.val = p(T.val, sup);
    for( i = 0; i < T.figli.length; i++){
        treeMap(T.figli[i],p);
    }
}
function visita_albero(t){
    if (t.figli ==undefined) return [t.val]
    let arT = [t.val]
    for (let s of t.figli)
        arT= arT.concat(visita_albero(s))
    return arT
}
let t ={val:12, figli:[{val: 3, figli: [{val: 1},{val: 1}, {val: 1, figli:[{val:1}]}]}]}
let p= (pa,d) => pa>d.reduce((r,s)=>r+s,0) 
treeMap(t,p); 
console.log(visita_albero(t));

//,[ true, false, true, true, false, true ]