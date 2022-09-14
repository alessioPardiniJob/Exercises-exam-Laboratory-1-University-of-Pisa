function analisiPathway(pazienti, path){
    return pazienti.map((x) => {
        let media = 0;
        let j = 0;
        for(let k in x){
            if(k in path){
                media += x[k];
                j++;
            }
        }
        return j!=0?(media/j):0;
    })
}

console.log(analisiPathway([{"TP53":10, "BRC1":20, "RAS":0,"MAPK":3},{"TP53":12, "MAPK":3}, {"TP53":1, "RAS":1,"BRC1":7},{"RASK":1,"CLN":1,"MAPK":1}],{"TP53":1,"RAS":1,"BRC1":1}))// → [10,4,3,0]