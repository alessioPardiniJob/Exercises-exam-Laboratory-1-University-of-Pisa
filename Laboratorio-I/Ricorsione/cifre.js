function cifre(n){//trasformare un intero in un array
    /*metodo JS like
    let s = String(n);
    let b = [...s];
    return b;
    */
    //metodo ricorsivo
    if(n == 0){
        return [];
    }
    let s = String(n);
    let b = [];
    b.push(s[0]);
    s = s.substring(1);
    b = b.concat(cifre(Number(s)));
    return b;

}
let n =23456;
console.log(cifre(n));