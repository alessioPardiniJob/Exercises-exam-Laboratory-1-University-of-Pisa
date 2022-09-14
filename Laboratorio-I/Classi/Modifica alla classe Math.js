
function mcd(n1,n2)
{
  MCD = null;
//se il primo numero è minore del secondo, si scambiano
  if (n1<n2) 
    {
      var temp = n1;
      n1 = n2;
      n2 = temp;
    }
//si fissano i valori delle variabili globali, usati dalla funzione seguente
  maggiore = n1;
  minore = n2;
//si applica l'algoritmo di Euclide
  while (n2 != 0)
    {
      resto = n1 % n2;
      n1 = n2;
      n2 = resto;
    }
//si fissa il valore di MCD, usato dalle funzioni seguenti
  MCD = n1;
  return MCD;
}

Math.rational = (x) => {
    let c; // contatore
    let pos = String(x).indexOf(".");
    for (c = 0; String(x)[pos+1] != undefined; c++) {
        pos++;
    }
    let num = x*(10**c);
    let den = 10**c;
    let div = mcd(num,den);
    return `${num/div}/${den/div}`;
};

console.log(Math.rational(3.1415));

