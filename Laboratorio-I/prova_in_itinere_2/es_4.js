class Matrice{
    constructor(n,m){
        this.mat = [];
        this.righe = n;
        this.colonne = m;
    }
    init(num){
        let i,j;
        let prov = [];
        for(j = 0; j < this.colonne; j++){
            prov.push(num);
        }
        for(i = 0; i < this.righe; i++){
            this.mat.push(prov);
        }
    }
    isSquare(){
        if(this.righe == this.colonne){
            return true;
        }
        else{
            return false;
        }
    }
    diag(){
        if(!this.isSquare()){
            return false;
        }
        let i,j = 0;
        let valRif = this.mat[0][0];
        for(i = 0; i < this.righe; i++){
            if(this.mat[i][j] != valRif){
                return false;
            }
            j++;
        }
        return true;
    }
}