//IMPOSTA M e i valori nell'array a e la funzione hash;
//x è la chiave, m è la dimenzione di T;



//MODIFCA m
m = 11;
//MODIFICA I DATI IN INPUT
let a = [35,83,57,26,15,63,97,46];


//funzione hash principale
let f = (x,i) => {
    return ((x % m) + i ) % m;
}


function posizioniScoppiaCompito(a,f){
    let i;
    let b = [];//array risultato
    let j;
    let r;
    let pos;
    for(i = 0; i < a.length; i++){
        j = 0;
        console.log(`${i+1}) elemento da inserire: ${a[i]}`);
        do{
            pos = f(a[i],j);
            if(b[pos] == undefined){
                b[pos] = a[i]; 
                break;
            }
            console.log(`Collisione avventua in posizione: ${pos}, della chiave: ${a[i]}.`);
            j++;
        }while(true);
        //Stampa per le soluzioni.
        for(r = 0; r < m; r++){
            if(b[r] == undefined){
                console.log(`pos: ${r} [] -->`);
            }
            else{
                console.log(`pos: ${r} [] --> ${b[r]}`); 
            }
        }
    }
}












//per verificare velocemente quanti sono i numeri
console.log(a.length);

let b = posizioniScoppiaCompito(a,f);
let i;