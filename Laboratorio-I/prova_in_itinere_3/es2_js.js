/**Si consideri un oggetto G che rappresenta una grammatica. 
 * Le proprietà di G hanno chiavi il cui nome consiste di una sola lettera maiuscola (A-Z); 
 * il valore di queste proprietà è una stringa qualunque.

Si scriva una funzione JS produci(G,s) che, data una grammatica G e una stringa qualunque s, 
restituisca la stringa ottenuta sostituendo ogni lettera maiuscola L contenuta in s con la 
corrispondente stringa associata a L in G, se esiste. Tutti i caratteri che non sono chiavi 
di G vengono eliminati. */

function produci(G,s){
    let i;
    let v ;
    for(i = 0; i < s.length; i++){
        v = s.length;
        if(s[i] in G){
            s = s.replace(s[i],G[s[i]]);
            i += s.length - v;
           // s[i] = G[s[i]];
        }
        else{
            s = s.replace(s[i],"");
            i += s.length - v;
        }
    }
    return s;
}

let G= {A:"aAB", B:"bb", C:"33"};

console.log(produci(G,"CAz")); //"33aAB"

console.log(produci(G,"BAH!")); // "bbaAB"