function possibiliCombinazioni(result){
    let i; 
    let prov = [];
    for( j = 0; j < result[0].length; j++){
        for( i = 1; i < result[0].length; i++){
            prov.push(result[0][j]*result[0][i]);
            prov = [... result[0]];
        }
    }
}

function strafatto(n){
    let i;
    let result = [];
    let prov = [];
    for( i = 0; i < n; i++){
        if(n % i == 0){
            prov.push(i);
        }
    }
    result.push(prov);

}