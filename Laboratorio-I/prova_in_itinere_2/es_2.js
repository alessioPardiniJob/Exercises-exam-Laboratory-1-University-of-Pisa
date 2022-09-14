class VeicoliException extends Error{
    ;
}
class Veicolo{
    constructor(brand){
        this.brand = brand;
    }
    parti(){
        throw new VeicoliException();
    }
}

class Bici extends Veicolo{
    constructor(marca,colore){
        super(marca);
        this.colore = colore;

    }
    parti(){
        return "vado a pedali";
    }
}