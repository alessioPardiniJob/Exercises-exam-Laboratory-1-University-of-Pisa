//verificare se l'array è ordinato

function ordinato(a,i,j){
    /**let i = 0;
    let j = a.length -1;*/
    let m = Math.floor((i + j)/2);
    //1)caso base a.length = 1
    if(j <= i){
        return true;
    }
    //2)caso base a.length = 2
    if(i == j-1){
        if(a[i] <= a[j]){
            return true;
        }
        return false;
    }
    result = ( ordinato(a,i,m) &&  ordinato(a,m+1,j) && a[m] <= a[m+1]);
    return result;
}
//ALTRA SOLUZIONE, MIGLIORE
function ord(A,i,j){
    if(i >= j){
        return true;
    }
    else{
        let m = Math.floor((i+j)/2);
        return ( A[m] <= A[m+1] && ord(A,i,m) && ord(A,m+1,j) );
    }
}

let a = [0,1,2,3,4];
console.log(ordinato(a,0,a.length-1));

let b = [0,2,1,3,4];
console.log(ordinato(b,0,b.length-1));
/**
 * Completezza
 * T(n) = T(n/2) + T(n/2) + O(1);
 * T(n) = 2T(n/2) + O(1)
 */