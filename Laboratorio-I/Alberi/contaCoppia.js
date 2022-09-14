function contaCoppia(T,val1,val2){
    let count = 0;
    if(T == undefined){
        return 0;
    }
    if(T.sx != undefined && T.dx != undefined && T.sx.val == val1 && T.dx.val == val2){
        count++;
    }
    count += contaCoppia(T.sx,val1,val2);
    count += contaCoppia(T.dx,val1,val2);
    return count;
}

let t = {val:20, sx:{val:19, sx:{val:8}, dx:{val:7, sx:{val:9} } }, dx:{val:-3, sx:{val:8},dx:{val:7}}};
console.log(contaCoppia(t,8,7));