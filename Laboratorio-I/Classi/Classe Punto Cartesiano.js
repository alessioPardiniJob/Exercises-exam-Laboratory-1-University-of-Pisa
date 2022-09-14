class puntoCartesiano{
    #x;
    #y;

    constructor(x,y){
        this.#x = x;
        this.#y = y;
    }

    dist(q){
        return Math.sqrt((q.x - this.#x)**2 + (q.y - this.#y)**2);
    }

    translate(q){
        this.#x = this.#x + q.x;
        this.#y = this.#y + q.y;
    }

    zero(){
        this.#x = 0;
        this.#y = 0;
    }

    get x() {
        return this.#x;
    }

    set x(x) {
        this.#x = x;
    }

    get y() {
        return this.#y;
    }

    set y(y) {
        this.#y = y;
    }


    

}

let punto1 = new puntoCartesiano(1,2);
let punto2 = new puntoCartesiano(3,4);
console.log(punto1.dist(punto2));
punto1.translate(punto2);
console.log(punto1);