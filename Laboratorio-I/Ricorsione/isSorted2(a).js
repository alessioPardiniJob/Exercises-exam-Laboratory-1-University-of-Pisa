function isSorted2(a,i,j){
    if(i >= j){
        return true;
    }
    let m = Math.floor((i+j)/2);
    return ((a[m] <= a[m+1]) && isSorted2(a,i,m) && isSorted2(a,m+1,j) );
}

console.log(isSorted2([0,1,2,3,4,5,6],0,6));