function votazioni(a,i,j){
    let m = a[Math.floor((i+j)/2)]; //calcolo valore mediano
    let x;
    let count = 0
    for (x = 0; i < j+1; x++){
        if (A[x] == m){
            count++;
        }
    } 
    return (count > n/2)
}

let a = [20,1,20,13,20,4,20,20];
console.log(votazioni(a,0,a.length-1));