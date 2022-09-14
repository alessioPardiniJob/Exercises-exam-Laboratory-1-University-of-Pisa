function algo4(a,i,j){
    if(i == j-1){
        if(a[i] < a[j]){
            return true;
        }
    }
    let m = Math.floor((i+j)/2);
    if(a[i] < a[m]){
        return algo4(a,i,m);
    }
    else if(a[m] < a[j]){
        return algo4(a,m,j);
    }
    return false;
}
let a = [5,4,100,2,1,100];
console.log(algo4(a,0,a.length-1));

//Complessità:
//T(n) = T(n/2) + O(1);
//Master Theorem: a = 1 b = 2
//g(n) = n ^(log__1 2)  f(n) = O(1) => g(n) = n^(0) = 1 , f(n) = O(1)
//f(n) = Theta(1)
// Caso 2: T(n) = Theta(log n);
