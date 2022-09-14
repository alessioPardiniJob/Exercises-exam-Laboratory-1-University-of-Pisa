function reverse2(a){
    if(a.length == 0){
        return;
    }
    let testa = a[0];
    a.splice(0,1);
    reverse2(a);
    a.push(testa);
    //return a;
}
console.log(reverse2([1,2,3,4,5,6]));