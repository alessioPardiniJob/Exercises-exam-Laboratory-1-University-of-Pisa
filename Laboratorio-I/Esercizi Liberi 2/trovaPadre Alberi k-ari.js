function trovaPadre(T,n){
    if(T.figli == undefined){
        return;
    }
    let i;
    let res;
    for( i = 0; i < T.figli.length; i++){
        if(n.val == T.figli[i].val){
            return T;
        }
        res = trovaPadre(T.figli[i],n);
    }
    return res;  
}
let t ={val: 16, figli: [{val: 4},{val: 2, figli: [{val: 8},{val: 10}]}]};
console.log(trovaPadre(t,{val :16}));
