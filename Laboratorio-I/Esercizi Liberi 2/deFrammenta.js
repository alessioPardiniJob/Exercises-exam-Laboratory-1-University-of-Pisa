function deFrammenta(a){
    let i;
    let bool = false;
    for( i = 0; i < a.length; i++){
        if(!bool && a[i] != a[i+1]){
            a.splice(i,1);
            i--;
        }
        else if(bool && a[i] != a[i+1]){
            bool = false;
        }
        else{
            bool = true;
        }
    }
}
let a = [1,1,2,3,3,3,3,3,1,2,2,4];
deFrammenta(a);
console.log(a);