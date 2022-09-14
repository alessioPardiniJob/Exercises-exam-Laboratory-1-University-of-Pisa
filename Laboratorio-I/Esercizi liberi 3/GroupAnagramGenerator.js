function* groupAnagrams(a){
    let i = 0, j = 1;
    let result = [];
    let sup = a;
    a = a.map(x => x = x.split("").sort().join());
    for(i = 0; i < a.length - 1; i++){
        while(j < a.length){
            if(a[i] == a[j] && sup[i] != sup[j]){
                result.push({1: sup[i], 2: sup[j]});
            }
            j++;
        }
        j = i +1;
    }
    for(i = 0; i < result.length; i++){
        yield result[i];
    }
}
var x=groupAnagrams(["scarabeo", "arabo", "noob", "arabesco", "bono"]);
console.log(x.next().value) //→ ['scarabeo', 'arabesco']
console.log(x.next().value) //→ ['arabo']
console.log(x.next().value) //→ ['noob', 'bono']
console.log(x.next().value)  //→ undefined
