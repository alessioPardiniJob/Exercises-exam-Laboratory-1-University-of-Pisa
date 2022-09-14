class MyS extends String{
    sommaA(){
        let i ;
        let sum = 0;
        for(i = 0; i < this.length; i++){
            sum += this.charCodeAt(i);
        }
        return sum;
    }
}
