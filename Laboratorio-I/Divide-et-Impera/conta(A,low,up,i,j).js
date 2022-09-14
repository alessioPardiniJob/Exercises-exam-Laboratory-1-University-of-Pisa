function conta(a,low,up,i,j){
    if(i == j){
        if(a[i] >= low && a[i] <= up && a[i] != a[i-1]){
            return 1;
        }
        return 0;
    }
    let m = Math.floor((i+j)/2);
    let count = 0;
    count += conta(a,low,up,i,m);
    count += conta(a,low,up,m+1,j);
    return count;
}


let a = [0,1,2,2,3,3,3,3,3,4,4,4,4,4,6,6,6,6,6,6,6]//[0,1,2,2,2,3,5,5,5,5,11,33];
let low = 3;
let up = 10;
console.log(conta(a,low,up,0,a.length-1));

//Complessità:
//T(n) = 2T(n/2) + O(1);
//Master Theorem: a = 2 b = 2
//g(n) = n ^(log__2 2)  f(n) = O(1) => g(n) = n^(1) = n , f(n) = O(1)
//f(n) = O(n^1 - 1); epsilon = 1;
// Caso 1: T(n) = Theta(n);