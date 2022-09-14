function elementoMancante(a,i,j){
    if(i > j){
        return -1;
    }
    else{
        let m = Math.floor((i+j)/2);
        if(a[m] == m){
            return elementoMancante(a,m+1,j);
        }
        else if(a[m] > m){
             return a[m] -1;
        }
    }
}
let a = [0,1,3,4,5];
console.log(elementoMancante(a,0,a.length-1));