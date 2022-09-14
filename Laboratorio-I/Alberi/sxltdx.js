function sxltdx(T){
    if(T == undefined){
        return;
    }
    if(T.sx != undefined && T.dx != undefined && T.sx.val > T.dx.val){
        let s = T.dx.val;
        T.dx.val = T.sx.val;
        T.sx.val = s;
    }
    sxltdx(T.sx);
    sxltdx(T.dx);
}
let T = {val:2, sx:{val:30, sx:{val:40}, dx:{val:30}},dx:{val:20, sx:{val:20}}};
sxltdx(T);
console.log(T);