function fabbrica(k){
    return () => k;
}

let a = fabbrica(2);
console.log(a());