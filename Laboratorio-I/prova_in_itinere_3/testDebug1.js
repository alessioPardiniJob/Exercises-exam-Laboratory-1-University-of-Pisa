class BinTree {
    //Il costruttore inizializza l'albero tramite il valore della radice, salvato nella proprietà data,
    //e un valore numerico, salvato in index.
    constructor(data, index) {
        //inizializzazione di albero destro e sinistro
        this.left = undefined;
        this.right = undefined;
        this.data = data;
        this.index = index;
    }
    insert(data, index) {
        if (this.index > index) {
            if (this.left == undefined) {
                this.left = new BinTree(data, index);
            }
            else {
                this.left.insert(data, index);
            }
        }
        else {
            if (this.right == undefined) {
                this.right = new BinTree(data, index);
            }
            else {
                this.right.insert(data, index);
            }
        }
    }
    /**Il metodo contains, preso come argomento un valore numerico,
     * se esiste un nodo avente index uguale al valore passato come argomento,
     * restituisce il valore data di quel nodo (che può essere di qualsiasi tipo); altrimenti, null. */
    contains(n) {
        let res1;
        let res2;
        if (this.index == n) {
            return this.data;
        }
        else{
            if (this.right != undefined) {
                res1 = this.right.contains(n);
            }
            if (this.left != undefined) {
                res2 = this.left.contains(n);
            }
        }
        if(res1 != null){
            return res1;
        }
        else if(res2 != null){
            return res2;
        }
        return null;
    }
}
let bt1 = new BinTree("pippo", 10);
bt1.insert("pluto", 5);
bt1.insert("paperino", 15);
bt1.insert("qui", 3);
bt1.insert("quo", 7);
bt1.insert("qua", 17);
bt1.insert("nonna papera", 13);
console.log(bt1.contains(7));
console.log(bt1.toString());