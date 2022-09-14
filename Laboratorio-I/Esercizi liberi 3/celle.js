function crocette(a){//a è una matrice
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
console.log(crocette(a));