Array.prototype.reverse2 = function(){
    let [h,...r] = this;
    return h==undefined?[]:[...r.reverse2(),h];
}