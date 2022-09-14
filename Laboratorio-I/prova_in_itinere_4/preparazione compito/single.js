/**Si scriva una funzione single(a) che, dato come argomento un array a di interi di lunghezza dispari n, 
 * ordinato in ordine crescente e in cui tutti gli elementi tranne uno appaiono esattamente due volte, 
 * restituisca il valore dell’unico elemento “single” che appare una sola volta.
Attenzione: dovete risolvere questo problema in O(log n).
Esempi
single([3,3,5,5,7,10,10,12,12]) → 7
single([1,2,2,5,5,8,8]) → 1
single([1,1,4,4,5,5,9,9,12,12,15,18,18]) → 15
 */

function single(a,i,j){
    if(a.length == 1){
        return a[0];
    }
    let m = Math.floor((i+j)/2);
    if(a[m] != a[m-1] && a[m] != a[m+1]){
        return a[m];
    }
    else if(a[m] == a[m-1]){
        return single(a,m+1,j);
    }
    else{
        return single(a,i,m-1);
    }
}

console.log(single([3,3,5,5,7,10,10,12,12],0,8) )
console.log(single([1,2,2,5,5,8,8],0,6) )
console.log(single([1,1,4,4,5,5,9,9,12,12,15,18,18],0,14) )