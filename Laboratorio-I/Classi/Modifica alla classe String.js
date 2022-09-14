let s = "ciao";

String.prototype.titolo = function (){
    let i;
    let s = "";
    for( i = 0; i < this.length; i++){
        s += this.charAt(i);
        s += " ";
    }
    return s.toUpperCase();
}

console.log(s.titolo());