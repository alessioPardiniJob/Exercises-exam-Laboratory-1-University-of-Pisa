class Esame{
    materia;
    cfu;
    voto;
    lode;

    constructor(materia,cfu,voto,lode){
        this.materia = materia;
        this.cfu = cfu;
        this.voto = voto;
        this.lode = lode; 
    }

}

class Studente{
    #matricola;
    #nome;
    #corsoDiLaurea;
    #anno;
    carriera = [];

    constructor(matricola,nome,corsoDiLaurea,anno){
        this.#matricola = matricola;
        this.#nome = nome;
        this.#corsoDiLaurea = corsoDiLaurea;
        this.#anno = anno;
    }

    passato(esame){//oggetto esame
        this.carriera.push(esame);
    }
    media(){
        let i;
        let media = 0;
        for( i = 0; i < this.carriera.length; i++){
            if(this.carriera[i].voto == 30 && this.carriera[i].lode){
                media += 32;
            }
            else{
                media += this.carriera[i].voto 
            }
        }
        return media/this.carriera.length;
    }

    get matricola() {
        return this.#matricola;
    }

    set matricola(matricola) {
        this.#matricola = matricola;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    get corsoDiLaurea() {
        return this.#corsoDiLaurea;
    }

    set corsoDiLaurea(corsoDiLaurea) {
        this.#corsoDiLaurea = corsoDiLaurea;
    }

    get anno() {
        return this.#anno;
    }

    set anno(anno) {
        this.#anno = anno;
    }
}

let studente1 = new Studente(1,"Alessio Pardini","Informatica",2002);
let esame1 = new Esame("Fondamenti dell'informatica",9,30,true);
let esame2 = new Esame("Algebra lineare",6,30,false);
studente1.passato(esame1);
studente1.passato(esame2);
console.log(studente1);
console.log(studente1.media());