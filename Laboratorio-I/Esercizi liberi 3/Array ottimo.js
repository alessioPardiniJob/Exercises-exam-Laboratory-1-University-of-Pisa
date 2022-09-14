function cerca(a,k,i,j){
    if(i >= j || j > a.length){
        return false;
    }
    let m = Math.floor((i+j)/2);
    if(a[m] > k){
        return cerca(a,k,i,m);
    }
    else if(a[m] < k){
        return cerca(a,k,m+1,j);
    }
    else{
        return true;
    }
}
console.log(cerca([-21,22,23,45,67], 0, 0, 4));
console.log(cerca([-21,22,23,45,67], -21, 0, 4));
console.log(cerca([], -21, 0, 4));