function copie(a,i,j){
    if(i >= j){
        return false;
    }
    let m = Math.floor((i+j)/2);
    return (a[m] == a[m+1]  || copie(a,i,m) || copie(a,m+1,j));
    
}
let a = [0,1,2,3,3];
console.log(copie(a,0,a.length-1));