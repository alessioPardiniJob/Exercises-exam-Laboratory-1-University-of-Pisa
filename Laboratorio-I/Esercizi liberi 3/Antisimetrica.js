class MatrixError extends Error{;}
function isAntisymmetric(m){
    //VERIFICA SE LA MATRICE è QUADRATA
    if( !(m.reduce((previousValue, currentValue) => previousValue && currentValue.length == m[0].length))){ 
        throw new MatrixError();
    }
    let result = true;
    let i = 0;
    let j;
    let aggiornaJ = 0;
    for(i = 0; i < m.length; i++){
        for(j = aggiornaJ; j < m[i].length; j++){
            //condizione diagonale
            if(i == j && m[i][j] == 0){
                result = result && true;
            }
            //condizione m[i][j] == -1*m[j][i]
            else if(m[i][j] == -1*m[j][i]){
                result = result && true;
            }
            else{
                result = false;
            }
        }
        aggiornaJ++;
    }
    return result;
}

console.log(isAntisymmetric([[0,2,-1],[-2,0,-4],[1,4,0]]));
console.log(isAntisymmetric([[1,2,-1],[-2,0,-4],[1,4,0]]));
console.log(isAntisymmetric([[1]]));
console.log(isAntisymmetric([[0]]));

try{
    console.log(isAntisymmetric([[0,2,-1],[-2,0,-4],[1,0]]));
}
catch(e){
    console.log("Matrice in input non Quadrata");
}