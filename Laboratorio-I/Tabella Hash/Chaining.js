//IMPOSTA M e i valori in a e la funzione hash;



//MODIFCA m
m = 11;
//MODIFICA I DATI IN INPUT
let a = [35,83,57,26,15,63,97,46];



//funzione hash principale
let f = (x) => {
    return x % m;//(m = dim T);
}



function posizioniScoppiaCompito(a,f){
    let i;
    let j;
    let b = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];//numero molto alto non è m
    for(i = 0; i < a.length; i++){
        let pos = f(a[i]);

        console.log(`${i+1}) elemento da inserire: ${a[i]}`);

        //gestione visualizzazione collisione
        if(b[pos].length != 0){
            console.log(`Collisione avventua in posizione: ${pos}, della chiave: ${a[i]}.`);
        }


        //inserimento IN CODA
        b[pos].push(a[i]);
        //inserimento IN TESTA
        //b[pos].unshift(a[i]);

        //Stampa per le soluzioni.
        for(j = 0; j < m; j++){
            console.log(`pos: ${j} [] -->`+ stampa(b[j])); 
        }
    
    }
}

function stampa(x){
    let i;
    let s = "";
    for(i = 0; i < x.length; i++){
        s += `${x[i]}, `;
    }
    return s;
}






//per verificare velocemente quanti sono i numeri
console.log(a.length);

let b = posizioniScoppiaCompito(a,f);
