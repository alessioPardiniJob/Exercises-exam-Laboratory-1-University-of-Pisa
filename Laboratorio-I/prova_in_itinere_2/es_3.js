function* generaDiv(num){
    let i = num;
    for(i; i > 0; i--){
        if(num % i == 0){
            yield i;
        }
    }
}
function* range(a,b) { 
	var i = a; 
	while(i < b){
		yield i++;  
		////funzione più o meno come un return
	} 
}