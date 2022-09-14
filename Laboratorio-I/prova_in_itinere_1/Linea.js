//y = ax + b
class Linea {

    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    
    parallelo(l){
        if(l.a == this.a){
            return true;
        }
        return false;
    }

    perpendicolare(l){
        if(l.a == -1/this.a){
            return true;
        }
        return false;
    }

    interseca(l){
        if(l.a != this.a){
            return true;
        }
        return false;
    }

    coincide(l){
        if((l.a == this.a) && (l.b == this.b)){
            return true;
        }
        return false;
    }

    zero(){
        if(this.a != 0){
            return -this.b/this.a;
        }
        return null;
    }
}

let linea1 = new Linea(4,2);
let linea2 = new Linea(4,10);
let linea3 = new Linea(-1/4,5);

console.log(linea1.zero());
console.log(linea1.interseca(linea3));
console.log(linea1.parallelo(linea2));
console.log(linea1.perpendicolare(linea2));
console.log(linea1.perpendicolare(linea3));