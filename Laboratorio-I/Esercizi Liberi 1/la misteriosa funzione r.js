function r([a,...b]) { 
    return a?[...r(b),a]:[] 
}
let b = [0,1,2,3,4];
console.log(r([[1,2],...b]));