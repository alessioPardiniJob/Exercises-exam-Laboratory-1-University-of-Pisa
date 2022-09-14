function esisteUguale(a,i,j){
    if(i >= j){
        return false;
    }
    let m = Math.floor((i+j)/2);
    return (a[m] == i || esisteUguale(a,i,m) || esisteUguale(a,m+1,j));
}
let a = [0,2,3,40,50,60,70,80];
console.log(esisteUguale(a,0,a.length));

//Complessità T(n) = 2T(n/2) + O(1)  == O(1);