function innestaSottoalberi(t,sT){
    if(t == undefined){
        return;
    }  
    innestaSottoalberi(t.sx,sT);
    innestaSottoalberi(t.dx,sT);
    if(t.val != undefined && t.val < 0){
        //t = Object.assign({},sT);
        t.val = sT.val;

    }
}
let t1 = t={val:20, sx:{val:19, sx:{val:8}, dx:{val:7, sx:{val:9}}}, dx:{val:-3, sx:{val:-8},dx:{val:7}}};

//let sT={val:1, sx:{val:1}, dx:{val:1}}
let sT1 = {val:0};

console.log("risultato sperato : \n");
console.log({val:20, sx:{val:19, sx:{val:8}, dx:{val:7, sx:{val:9}}}, dx:{val:0}});
console.log("risultato ottenuto: \n");
let t2 = {val:20, sx:{val:19, sx:{val:8}, dx:{val:7, sx:{val:9}}}, dx:{val:0}};
let t3 = innestaSottoalberi(t1,sT1);
console.log(t1);