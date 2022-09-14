//IMPOSTA M e i valori nell'array a e la funzione hash;
//Chaining, Funzione Hash
//x è la chiave, m è la dimenzione di T;


//MODIFCA m
m = 13;
//MODIFICA I DATI IN INPUT
let a = [20,33,45,67,87,66,31,7];



//funzione hash principale
let h = (x,i) => {
    return (h1(x) + i*h2(x)) % m;
}
//prima funzione hash
let h1 = (x) =>{
    return x % m;
}
//seconda funzione hash
let h2 = (x) =>{
    return 1 + (x % (m-1));
}




function posizioniScoppiaCompito(a,h){
    let i;
    let b = [];//array risultato
    let j;
    let pos;
    let r;
    for(i = 0; i < a.length; i++){
        j = 0;
        console.log(`${i+1}) elemento da inserire: ${a[i]}.`);
        do{
            pos = h(a[i],j);
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

let b = posizioniScoppiaCompito(a,h);
let i;
