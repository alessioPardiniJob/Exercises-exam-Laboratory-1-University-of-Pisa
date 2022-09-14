class TooSmallException extends Error {;}
class InvalidFormatException extends Error {;}
class BadContentException extends Error {;}


function crocettex(a){//a è una matrice
    //confronta ogni lunghezza di una riga, cioè il numero di colonne per righe, con il numero di righe, se questi valori sono diversi => significa che la matrice nn è quadrata
    if( !(a.reduce((previousValue, currentValue) => previousValue && currentValue.length == a[0].length)) ){ 
        throw new InvalidFormatException();
    }
    //controlla se la matrice è più piccola di un 3x3
    else if(a.length < 3 && a[0].length < 3){
        throw new TooSmallException();
    }
    //per ogni riga non fa altro che scorrere l'array della riga e controllare se ogni elemento è diverso da zero o da 1, portandosi dietro un valore di verità
    else if(a.reduce((previousValue, currentValue) => previousValue && currentValue.reduce((previousValue, currentValue) => previousValue && currentValue == 0 && currentValue == 1,true),true)){
        throw new BadContentException();
    }

    let i,j;
    let posCrocette = [];
    for(i = 1; i < a.length; i++){
        for(j = 1; j < a[i].length; j++){
            if(a[i][j] == 1){
                if(a[i-1][j] == 1 && a[i][j-1] == 1 && a[i][j+1] == 1 && a[i+1][j] ==1){
                    posCrocette.push({x: j, y: i});
                }
            }
        }
    }
    return posCrocette;
}

let a = [[0,0,0,0],[0,1,0,0],[1,1,1,0],[0,1,1,1],[0,0,1,0]];

try{
    console.log(crocettex(a));
}catch (e){
    if(e instanceof TooSmallException){
        console.log("Matrice più piccola di 3x3");
    }
    else if(e instanceof InvalidFormatException){
        console.log("Matrice ha righe di lunghezza diversa");
    }
    else if(e instanceof BadContentException){
        console.log("Matrice contiene qualunque valore diverso da 0 o 1");
    }
}