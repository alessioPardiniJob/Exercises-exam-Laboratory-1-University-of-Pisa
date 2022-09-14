function isEmail(e){
    let nome = e.slice(0,e.indexOf("@"));
    let dominio = e.slice(e.indexOf("@") +1);
    let i;
    let bool = false;
    for( i = 0; i < nome.length; i++){
        if(!(/[a...z]/.test(nome[i]) || /[0...9]/.test(nome[i]) ||"." == nome[i] || "_" == nome[i] || nome[i] == "_")){
            return false;
        }
    }
    for( i = 0; i < dominio.length; i++){
        if(!(/[a...z]/.test(dominio[i]) || /[0...9]/.test(dominio[i]) || "_" == dominio[i] || dominio[i] == "_")){
            if("." == dominio[i]){
                bool = true;
            }
            return false;
        }
    }
    if(bool){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEmail("gervosi@di.unipi.it"));