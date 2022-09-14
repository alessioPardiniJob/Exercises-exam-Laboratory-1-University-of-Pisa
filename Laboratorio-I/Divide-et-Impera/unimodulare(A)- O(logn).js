function unimodulare(A,i,j){
    if(i >= j){
        return -1;
    }
    else{
        let m = Math.floor((i+j)/2);
        if(a[m-1] > a[m] && a[m] > a[m+1]){
            return unimodulare(a,m+1,j);
        }
        else if(a[m-1] < a[m] && a[m] < a[m+1]){
            return unimodulare(a,i,m);
        }
        else if(a[m-1] > a[m] && a[m] < a[m+1]){
             return a[m];
        }
    }
}
let a = [20,19,17,15,12,11,5,1];
console.log(unimodulare(a,0,a.length-1));