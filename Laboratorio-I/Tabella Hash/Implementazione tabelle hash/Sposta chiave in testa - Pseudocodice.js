function cercaEsposta(T,k){ // T è la tabella hash liste di trabocco, k è la chiave
    h = hash(k); // con le liste di trabocco si calcola l'hash poichè
    //questo ci da immediatamente la posizione, poi bisogna cercare la chiave nell'eventuale lista
    v = search(T[h],k); // ricerca la chiave nella lista e mi faccio restituire l'elemento che ha quella chiave
    if(v != nil && v != T[h]){// procedo sse v è presente e non è gia in testa
        if(v.next != nil){
            v.next.prev = v.prev; //se l'elemento è in coda allora 
        }
        v.prev.next = v.next; //spiegazione grafica di cosa fa tale istruzione
                              // [v.prev]   [v]-->[v.next]
                              // [v.prev] <--[v]<--[v.next]
                              //       =============>
                      //        ----------->
        v.prev = nil; // [v.prev]    [v]-->[v.next]
                      // [nil] <=====[v]<--[v.next]
        
        v.next = T[h];
        T[h].prev = v;
        T[h] = v;                  
    }
    let count = 0;
    for( i = 0; i < a.length; i++){ //si scorre l'array
        if(search(D,S[i]) == undefined){
            insert(D,S[i]);
            count++;
        }
    }
    return count;
  }
  
  let S; //Array di numeri