function numeriTriangolari(n){
    if(n == 0){
        return 0;
    }
    return n+numeriTriangolari(n-1);
}


console.log(numeriTriangolari(4));