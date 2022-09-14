function tabelline(n){
    let i;
    for(i = 0; i <= 10; i++){
        console.log(n*i);
    }
}

tabelline(2);

class Studente{
    constructor(nome,matricola,anno=undefined){
        this.nome = nome;
        this.matricola = matricola;
        this.anno = anno;
    }



}

let studente1 = new Studente("Alessio",637814);
console.log(studente1);

