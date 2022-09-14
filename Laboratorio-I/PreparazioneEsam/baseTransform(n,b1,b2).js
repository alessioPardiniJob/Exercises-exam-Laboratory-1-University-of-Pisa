function baseTransform(n,b1,b2){
    if(b1 > b2){
        let res = []
        do{
            res.push(n%b2);
            n = Math.floor(n/b2);
        }while(n != 0);
        res.reverse();
        let result = "";
        res.forEach((e) =>{
            result = result.concat(e);
        });
        return Number(result);
    }
    else if(b1 < b2){
        let sup = [...String(n)];
        let res = [];
        let j = 0;
        let i;
        for(i = sup.length; i >= 0 && j < sup.length; i--){
            res.push(Number(sup[j]*((b1)**i)));
            j++;
        }
        return res.reduce((r,e) =>e+r,0);
    }
}

console.log(baseTransform(100001,2,10));