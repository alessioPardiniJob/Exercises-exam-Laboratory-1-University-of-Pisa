function stampa(a){
    let i;
    let s = "[ ";
    for( i = 0; i < a.length; i++){
        s += a[i].toString() + " ";
    }
    s+= " ]";
    console.log(s);

}
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

class retta{
    m;
    q;
    constructor(p1,p2){
        this.m = (p1.y - p2.y)/(p1.x -p2.x);
        this.q = (p1.x*p2.y - p2.x*p1.y) / (p1.x-p2.x);
    }
    calcoloAngolo(x){
        return Math.atan(Math.abs( (this.m - x.m) / (1 + this.m*x.m) ));
    }
}
class Triangolo{
    x;
    y;
    z;
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    calcoloArea(){
        let d1 = this.x.dist(this.y); //distanza punto 1 al punto 2
        let d2 = this.y.dist(this.z); //distanza punto 2 al punto 1;
        let retta1 = new retta(this.x,this.y); //retta passante per punto 1 e punto 2
        let retta2 = new retta(this.z,this.y); //retta passante per punto 3 e punto 2
        let beta = retta1.calcoloAngolo(retta2);
        return (d2*d1*Math.sin(beta))/2;
    }
    toString(){
        console.log("{x: (" + this.x.x +"," +this.x.y +") , y: (" + this.y.x +"," +this.y.y +") , z: (" + this.z.x +"," +this.z.y +") } ");
    }
}
function ordinaT(a){
    a.map( (x) => a[a.indexOf(x)] = x.calcoloArea());
    a.sort((a,b) => a-b);
}
//punti T1
let p1_1 = new puntoCartesiano(0,1);
let p2_1 = new puntoCartesiano(4,1);
let p3_1 = new puntoCartesiano(2,7);
//punti T2
let p1_2 = new puntoCartesiano(5,10);
let p2_2 = new puntoCartesiano(30,1);
let p3_2 = new puntoCartesiano(23,7);
//punti T3
let p1_3 = new puntoCartesiano(0,1);
let p2_3 = new puntoCartesiano(4,10);
let p3_3 = new puntoCartesiano(2,7);
//punti T4
let p1_4 = new puntoCartesiano(0,0);
let p2_4 = new puntoCartesiano(4,30);
let p3_4 = new puntoCartesiano(2,2);

let t1 = new Triangolo(p1_1,p2_1,p3_1);
let t2 = new Triangolo(p1_2,p2_2,p3_2);
let t3 = new Triangolo(p1_3,p2_3,p3_3);
let t4 = new Triangolo(p1_4,p2_4,p3_4);

let a =[t1,t2,t3,t4];


ordinaT(a);


console.log(a);