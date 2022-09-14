function esisteFisso(a,i,j){
    if(i > j){
        return false;
    }
    else{
        let m = Math.floor((i+j)/2);
        if(a[m] == m){
            return true;
        }
        else if(a[m] < m){
             return esisteFisso(a,m+1,j);
        }
        else{
             return esisteFisso(a,i,m);
        }
    }
}

let a = [0,20,30,40,60];
console.log(esisteFisso(a,0,a.length-1));