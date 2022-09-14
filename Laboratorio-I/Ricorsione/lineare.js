function sommaArray(a){
    let sum = 0;
    if(a.length == 0){
        return sum;
    }
    sum += a[0];
    a.splice(0, 1);
    return sum += sommaArray(a);
}

let a = [1,2,3,4,5];
console.log(sommaArray(a));
