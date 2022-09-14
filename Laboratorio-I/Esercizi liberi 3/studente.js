const fs = require("fs");
class Studente {
    constructor(nome, cognome, citta, votoLaurea) {
        this.nome = nome;
        this.cognome = cognome;
        this.citta = citta;
        this.votoLaurea = votoLaurea;
    }
}

function leggiStudenti(file) {
    let s = fs.readFileSync(file);
    let support = s.toString().split("\n");
    let i;
    let n = [];
    let studentParameters;
    for (i = 0; i < support.length; i++) {
        studentParameters = support[i].split(",");
        n[i] = new Studente(studentParameters[0], studentParameters[1], studentParameters[2], studentParameters[3]);
    }
}

