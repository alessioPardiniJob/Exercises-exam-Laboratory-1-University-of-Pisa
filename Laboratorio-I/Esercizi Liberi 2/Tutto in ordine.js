function isSorted(a,i,j){
    if(i >= j){
        return true;
    }
    if(a[i] < a[j]){
        return ((a[i] < a[i+1]) && (a[j] > a[j-1]) && (isSorted(a,i+1,j-1)) );
    }
    return false;
}

let a = [0,1,2,3,4,5,6];

console.log(a);
console.log(isSorted(a,0,a.length-1));