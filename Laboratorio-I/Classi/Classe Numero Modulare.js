"use strict";

class ModuliDiversi extends Error{
    ;
}

class NumeroModulare{
    #num;
    v;
    m;

    constructor(v,m){
        this.#num = v % m;
        this.v = v;
        this.m = m;
    }

    get num() {
        return this.#num;
    }

    add(n){
        if(this.m == n.m){
            return (this.v + n.v) % this.m;
        }
        else{
            throw new ModuliDiversi();
        }
    }    
}

let num1 = new NumeroModulare(10,20);
let num2 = new NumeroModulare(32,19);
try{
    let resultSum = num1.add(num2);
    console.log(resultSum);
} catch(e){
    console.log("eccezione catturata");
}
finally{
    console.log("mortacci tua");
}
