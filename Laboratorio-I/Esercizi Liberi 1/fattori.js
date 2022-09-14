function fattori(n){
    let result = [];
    let i;
    for( i = 1; i <= n; i++){
        if( n % i == 0){
            result.push([i,n/i]);
        }
    }
    return result;
}

let n = 359;
console.log(fattori(n));