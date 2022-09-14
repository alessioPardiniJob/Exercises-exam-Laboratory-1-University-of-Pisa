"use strict";
/**p.push(el) - inserisce in cima alla pila p l'elemento el, e restituisce il numero di elementi presenti nella pila dopo l'inserimento
p.pop() - estrae l'elemento in cima alla pila, e lo restituisce. Se la pila e' vuota, restituisce null
p.top() - restituisce, senza rimuoverlo, l'elemento in cima alla pila. Se la pila e' vuota, restituisce null
p.size() - restituisce il numero di elementi presenti nella pila p
p. reset() - elimina tutti gli elementi dalla pila p,  e restituisce 0
p.merge(p1) - sia p1 una pila non vuota, e dello stesso tipo di p. Il metodo inserisce tutti gli elementi in p1 (a partire da quello in cime) in cima a p, e restituisce il numero degli elementi complessivi di p dopo l'operazione di merge
p.print() - restituisce una stringa contenente la rappresentazione in stringa  degli elementi in p (tutti gli elementi della coda sulla stessa riga, separati da virgola, senza spazi), a partire da quello in cima. NOTA: nei test che faremo, useremo solo oggetti per cui esiste una rappresentazione sensata come stringa.
 */
class Pila {
    constructor(arrayDati) {
        if (arrayDati) {
            this.pila = arrayDati;
            this.dim = arrayDati.length;
        }
        else {
            this.pila = [];
            this.dim = 0;
        }
    }
    push(el) {
        this.pila.push(el);
        return ++this.dim;
    }
    pop() {
        let result = this.pila.pop();
        if (result != undefined) {
            this.dim--;
            return result;
        }
        return null;
    }
    top() {
        let result = this.pila.slice(-1); //questo pechè la slice returna un vettore
        if (result != undefined) {
            return result[0];
        }
        return null;
    }
    size() {
        return this.dim;
    }
    reset() {
        let i;
        for (i = 0; i < this.dim; i++) {
            this.pila.pop();
        }
        return 0;
    }
    merge(p1) {
        let i;
        for (i = 0; i < p1.size(); i++) {
            this.pila.push(p1.pila[i]);
        }
    }
    print() {
        let s = "";
        let i;
        for (i = this.pila.length; i > 0; i--) {
            s += this.pila[i];
        }
        return s;
    }
}
let p = new Pila();
console.log(p.pop()); //-> null
console.log(p.push("ciao")); //-> 1
console.log(p.push("come")); //-> 2
console.log(p.push("va")); //-> 3
console.log(p.push("oggi")); //-> 4
console.log(p.print()); //-> "oggi,va,come,ciao"
console.log(p.size()); //-> 4
console.log(p.top()); //-> "oggi"
console.log(p.print()); //-> "oggi,va,come,ciao"

