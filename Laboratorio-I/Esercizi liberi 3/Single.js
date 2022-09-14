function single(a,i,j){
    if( i >= j){
        return a[i];
    }
    let m = Math.floor((i+j)/2);
    if(a[m] == a[m+1] && ((j - m+1) %2) == 0){
        return single(a,i,m);
    }
    else if(a[m] == a[m+1] && ((j - m+1) %2) != 0){
        return single(a,m,j);
    }
    else if(a[m] == a[m-1] && ((m-1 -i) %2) == 0){
        return single(a,m,j);
    }
    else if(a[m] == a[m-1] && ((m-1 -i) %2) != 0){
        return single(a,i,m);
    }
    return a[m];
}
let a = [1,1,4,4,5,5,9,9,12,12,15,18,18];
console.log(single(a,0,a.length-1));