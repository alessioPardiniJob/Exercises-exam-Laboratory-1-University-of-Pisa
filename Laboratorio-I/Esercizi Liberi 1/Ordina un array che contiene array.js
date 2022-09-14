function stampaArrayDiArray(b){
    let s = "";
    let i;
    for( i = 0; i < b.length; i++){
        if(i == 0){
            s += "[";
        }
        s += " ["+b[i] +"] "
    }
    s+="]";
    console.log(s);
}

function confrontaDueArray(a,b){
    let i;
    for( i = 0; i < Math.max(a.length,b.length); i++){
        if(a[i] < b[i]){
            return -1;
        }
        else if(a[i] > b[i]){
            return 1;
        }
    }
    if(a.length > b.length){
        return 1;
    }
    else if(a.length < b.length){
        return -1;
    }
    else{
        return 0;
    }
}

function ordnung(a){
    let i;
    a.map((x) => x.sort((z,y) => z-y)); //su ogni elemento dell'array (che è un array), fa un sort;
    return a.sort(confrontaDueArray); //solo il nome della funzione      
}

let b = (ordnung([[5,1,3],[1,5,2,7],[3,4],[3] ]));
stampaArrayDiArray(b);

