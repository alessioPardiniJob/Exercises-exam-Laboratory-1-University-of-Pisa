//** */

class tabellaHash{
    elementiSalvati = 0;
    constructor(r,f){
        this.lista = [];
        if(r<0){
            r = 1;
        }
        let i;
        for(i = 0; i < r; i++){
            this.lista.push([]);
        }
        this.f = f;
    }
    add(n){
        this.lista[this.f(n)].push(n);
        this.elementiSalvati++;
        return this.elementiSalvati;
    }
    remove(n){
        if(this.lista[this.f(n)].includes(n)){
            this.lista[this.f(n)].splice(this.lista[this.f(n)].indexOf(n),1);
            this.elementiSalvati--;
        }
        return this.elementiSalvati;
    }
    search(n){
        if(this.lista[this.f(n)].includes(n)){
            return this.lista[this.f(n)].indexOf(n);
        }
        return -1;
    }
    getTab(){
        return this.lista;
    }
    addAll(a){
        let i;
        for(i = 0; i < a.length; i++){
            this.add(a[i]);
        }   
        return this.elementiSalvati;
    }
}

let th = new tabellaHash(11, (n) => n%11);

console.log(th.add(0))// restituisce 1 e la tabella contiene: [ [ 0 ], [], [], [], [], [], [], [], [], [], [] ]

console.log(th.add(11))// restituisce 2 e la tabella contiene [ [ 0, 11 ], [], [], [], [], [], [], [], [], [], [] ]

console.log(th.search(11))// restituisce 1

console.log(th.remove(111))// restituisce 2

console.log(th.remove(0))// restituisce 1 e la tabella contiene [ [ 11 ], [], [], [], [], [], [], [], [], [], [] ]

console.log(th.search(11))// restituisce 0
th.addAll([0,0,0,0,1,2,3,4,5,6]);
console.log(th.remove(0));