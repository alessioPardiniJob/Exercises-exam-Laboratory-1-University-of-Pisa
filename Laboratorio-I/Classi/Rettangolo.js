class Rettangolo{
    #left; //coordinata x che identifica l'angolo in alto a sinistra del rettangolo
    #top; //coordinata x che identifica l'angolo in alto a sinistra del rettangolo
    #width; //larghezza
    #height; // altezza

    constructor(left,top,width,height){
        this.#left = left;
        this.#top = top;
        this.#width = width;
        this.#height = height;
    }
    
    intersezione(r){
        //proiezione asse x
        let condizione_1 = (this.#left <= r.left && (this.#left + this.#width) >= r.left); // l'estremo inferiore di r è compreso tra estremo superiore e inferiore di this (proiezione asse delle x)
        let condizione_2 = (this.#left <= (r.left + r.width) && (this.#left + this.#width) >= (r.left + r.width)); // l'estremo superiore di r è compreso tra estremo superiore e inferiore di this (proiezione asse delle x)
        //proiezione asse y
        let condizione_3 = (this.#top >= r.top && (this.#top - this.#height) <= r.top); // l'estremo inferiore di r è compreso tra estremo superiore e inferiore di this (proiezione asse delle y)
        let condizione_4 = (this.#top >= (r.top - r.height) && (this.#top - this.#height) <= (r.top - r.height)) // l'estremo superiore di r è compreso tra estremo superiore e inferiore di this (proiezione asse delle y)
        
        if( (condizione_1 || condizione_2) && (condizione_3 || condizione_4)){
            return true;
        }
        return false;
    }

    get left() { 
		return this.#left
	}
	set left(left) { 
		this.#left=left;
	}
	get top() { 
		return this.#top;
	}
	set top(top) {
		this.#top=top;
	}
    get width() { 
		return this.#width
	}
	set width(width) { 
		this.#width=width;
	}
	get height() { 
		return this.#height;
	}
	set height(height) {
		this.#height=height;
	}
}

let rettangolo1 = new Rettangolo(2,3,3,2);
let rettangolo2 = new Rettangolo(4,2,2,2);

console.log(rettangolo1.intersezione(rettangolo2));