/**Scrivere una funzione JS floyd(i), dove i e' un numero naturale (>=0). Il triangolo di Floyd è un triangolo rettangolo che contiene numeri naturali, definito riempiendo le righe del triangolo con numeri consecutivi e partendo da 1 nell’angolo in alto a sinistra. Ecco, come esempio, le prime righe del triangolo di Floyd:
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
La funzione floyd(i) restituisce la riga i-esima del triangolo di Floyd, memorizzata in un array (le righe del triangolo si contano a partire da 0).
ESEMPI:
floyd(0) -> [1]
floyd(4) -> [11,12,13,14,15]
 */

function floyd(k){
    let i;
    let a = [];
    for(i = ((k*(k+1))/2) + 1 ; i <= ((k*(k+1))/2) + k+1 ; i++){
        a.push(i);
    }
    return a;
}
console.log(floyd(4))