function merge(a,b){
    for(let k in b){
        a[k] = b[k];
    }
    return a;
}

console.log(merge({a:1,b:1},{c:1}))