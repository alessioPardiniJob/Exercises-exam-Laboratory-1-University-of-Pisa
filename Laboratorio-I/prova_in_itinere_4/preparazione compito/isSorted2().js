function isSorted2(a){
    if(a.length == 2){
        return (a[0] < a[1]);
    }
    if(a[0] < a[1]){
        a.shift();
        return true && isSorted2(a);
    }
    return false;
}







console.log(isSorted2([-21,-2,0,4,6,210])) //→ true

console.log(isSorted2([2,6,8,8,9,21])) //→ false

console.log(isSorted2([2,6,8,9,10,-42])) //→ false

