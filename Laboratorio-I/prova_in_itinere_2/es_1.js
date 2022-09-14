class AlberoBin{

    constructor(val,extra,sx,dx){
        this.val = val;
        this.extra = extra;
        this.sx = sx;
        this.dx = dx;
    }

    creaAlbero(T){
        this.val = T.val;
        this.sx = T.sx;
        this.dx = T.dx;
        this.extra = 0;
    }

    sumSubTree(t){
        let sum = 0;
        if(t == undefined){
            return 0;
        }
        sum += sumSubTree(t.sx);
        sum += sumSubTree(t.dx);
        if(sum == t.val){
            t.extra = sum;
            sum += t.val;
            return sum;
        }
        else{
            t.extra = 0;
            sum += t.val;
            return sum;
        }
    }  
}