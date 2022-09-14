/**Sia G= {A:"aAB", B:"bb", C:"33"}; allora
produci(G,"CAz") -> "33aABz"
produci(G,"BAH!") -> "bbaABH!"
 */
//utilizzo di split e join
//stringa.split("occorrenzaDaSostituire").join("stringaCheSostituisce");
//mentre join su un array lo rende una stringa;
function produci(G,s){
    let i;
    let arr = s.split("");
    for( i = 0; i < arr.length; i++){
        if(arr[i] in G){
            arr.splice(i,1,G[arr[i]]);
        }
    }
    return arr.join().split(",").join("");
}
let G= {A:"aAB", B:"bb", C:"33"};
console.log(produci(G,"CAz"));