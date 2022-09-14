
function vocali(s){
    let i;
    let result = {ant: 0 , cent: 0, post: 0};
    for( i = 0; i < s.length; i++){
        if(s[i] == 'e' || s[i] == 'E' || s[i] == 'i' || s[i] == 'I'){//vocale anteriore
            result.ant ++;
        }
        else if(s[i] == 'a' || s[i] == 'A'){//vocali centrali
            result.cent++;
        }
        else if(s[i] == 'o' || s[i] == 'O' || s[i] == 'u' || s[i] == 'U'){//vocali posteriori
            result.post++;
        }
    }
    return result;
}
let s = "ciao MammA";
console.log(vocali(s));