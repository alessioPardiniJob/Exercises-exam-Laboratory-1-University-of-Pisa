class NoSuchElementException extends Error {;}

class MultiSet{
    multiInsieme = {};
    constructor(multiInsieme){
        let i;
        for(i = 0; i < multiInsieme.length; i++){
            if(this.multiInsieme[multiInsieme[i]]){
                this.multiInsieme[multiInsieme[i]]++;
            }
            else{
                this.multiInsieme[multiInsieme[i]] = 1;
            }
        }
    }

    add(e){
        if(this.multiInsieme[e]){
            this.multiInsieme[e]++;
        }
        else{
            this.multiInsieme[e] = 1;
        }
    }

    remove(e){
        if(this.multiInsieme[e] && this.multiInsieme[e] > 1){
            this.multiInsieme[e]--;
        }
        else if(this.multiInsieme[e]){
            delete this.multiInsieme[e];
        }
        else{
            throw new NoSuchElementException();
        }
    }

    size(){
        let count = 0;
        for(let key in this.multiInsieme){
            count += this.multiInsieme[key];
        }
        return count;
    }

    union(S){
        for(let key in S.multiInsieme){
            if(this.multiInsieme[key]){
                this.multiInsieme[key]++;
            }
            else{
                this.multiInsieme[key] = 1;
            }
        }
    }

    diff(S){
        for(let key in S.multiInsieme){
            if(this.multiInsieme[key] && this.multiInsieme[key] > 1){
                this.multiInsieme[key]--;
            }
            else if(this.multiInsieme[key]){
                delete this.multiInsieme[key];
            }
        }
    }

    toString(){
        let s = "{";
        for(let key in this.multiInsieme){
            s+=`${key} : ${this.multiInsieme[key]},  `;
        }
        s+="}";
        console.log(s);
    }
}

let a = ["Pippo","Pluto","Bob","Alice","Maicol","Antonio","Pippo","Bob","Maicol"];
let multiInsiemeA = new MultiSet(a);
multiInsiemeA.toString();
multiInsiemeA.add("Mirko");
multiInsiemeA.add("Pippo");
multiInsiemeA.toString();
try{
    multiInsiemeA.remove("Pippo");
    multiInsiemeA.remove("wow");
}
catch(e){
    console.log("Elemento richiesto da eliminare non presente nel multi insieme");
}
multiInsiemeA.toString();
console.log(multiInsiemeA.size());
let b = ["Pippo","Pluto","Bob","Alice","Maicol","Sapo","Ciccio"];
let multiInsiemeB = new MultiSet(b);
multiInsiemeB.toString();
multiInsiemeA.union(multiInsiemeB);
multiInsiemeA.toString();
multiInsiemeA.diff(multiInsiemeB);
multiInsiemeA.toString();
