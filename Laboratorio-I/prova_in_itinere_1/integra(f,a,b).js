function integra(f,a,b){
    return function XPathResult(N){
        let i = 1;
        let s = 0;
        for( i; i < N; i++){
             s += f(a + (i*((b-a)/N)));
        }
        return ((b-a)/N)*( ((f(a)+f(b))/2) + s); 
    };
}

console.log(integra(x=>x**x,1,2.5)(10));