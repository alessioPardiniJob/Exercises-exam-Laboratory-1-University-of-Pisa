function simmdiff(a,b){
    let c = {};
    let max = -Infinity;
    for(let k in a){
        if(!b[k]){
            c[k] = a[k];
            //gestione max
            if(max < Number(k)){
                max = Number(k);
            }
        }
    }
    for(let k in b){
        if(!a[k]){
            c[k] = b[k];
            //gestione max
            if(max < Number(k)){
                max =Number(k);
            }
        }
    }
    delete c[max];
    c[max*2] = 1;
    return c;
}

a = {0:1, 4:1, 5:1, 9:1, 10:1, 544:1}

b = {0:1, 9:1, 22:1, 544:1}

console.log(simmdiff(a,b))// -> {4:1, 5:1, 10:1, 44:1}