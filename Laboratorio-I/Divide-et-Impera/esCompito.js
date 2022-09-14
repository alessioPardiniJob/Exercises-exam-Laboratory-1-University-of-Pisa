function pariDispari(a,i,j){
    //restituisce true se la somma è pari, false se è dispari
    if(i >= j){
        if(a[i] % 2 != 0){
            return true;
        }
        return false;
    }
    let m = Math.floor((i+j)/2);
    let result1 = pariDispari(a,i,m);
    let result2 = pariDispari(a,m+1,j);
    return( ( (result1) && !result2 )  || ( !(result1) && result2 )  );
}

let a = [1,2,3,4,5,6,7];
console.log(pariDispari(a,0,a.length));

