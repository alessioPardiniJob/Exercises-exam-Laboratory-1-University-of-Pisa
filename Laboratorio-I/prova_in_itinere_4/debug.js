"use strict";
class GNode {
    constructor(label) {
        this.label = label;
    }
}
class GEdge {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}
class Graph {
    constructor(nodes, edges) {
        this.nodes = nodes;
        this.edges = edges;
    }
}
function isDAG(g) {
    let flag;
    let j = 0;
    if (g.nodes.length == 0) {
        return true; //grafo aciclico
    }
    else {
        let i;
        let l = "";
        let k = 0;
        let count = 0;
        flag = true; // grafo aciclico
        let a = [];
        for(i = 0; i < g.edges.length; i++){
            for(k = 0; k < a.length; k++){
                if(g.edges[i].from.label != a[j].label){
                    count++;
                }
            }
            if(count == a.length){
                a.push(g.edges[i].from);
            }
            count = 0;
        }
        if(a.length == g.nodes.length){
            flag = false;
        }
        if (!flag) {
            return false;
        }
        
        for(i = 0; i < g.nodes.length; i++){
            if(!(a.includes(g.nodes[i]))){
                l = g.nodes[i].label;
                j = i;
            }
        }
        let arrayArchi = [...g.edges];
        let arrayNodi = [...g.nodes];
        arrayNodi.splice(g.nodes.indexOf(g.nodes[i]), 1);
        for (i = 0; i < arrayArchi.length; i++) {
            if (arrayArchi[i].to.label == l) {
                arrayArchi.splice(i, 1);
            }
        }
        let g1 = new Graph(arrayNodi, arrayArchi);
        return isDAG(g1);
    }
}


let nodoA = new GNode(1), 
    nodoB = new GNode(2), 
    nodoC = new GNode(3),
    nodoD = new GNode(4);
let arcA = new GEdge(nodoA, nodoB), 
    arcB = new GEdge(nodoA, nodoC),
    arcC = new GEdge(nodoC, nodoD),
    arcD = new GEdge(nodoD, nodoA),
    arcE = new GEdge(nodoD, nodoC);
let grafA = new Graph([nodoA, nodoB, nodoC, nodoD], [arcA, arcB, arcC]);
let grafB = new Graph([nodoA, nodoB, nodoC, nodoD], [arcA, arcC, arcE]);

console.log(isDAG(grafA));// true
console.log(grafA.nodes.length); //4
console.log(grafA.edges.length);//3);
console.log(isDAG(grafB))//, false);// false
console.log(grafB.nodes.length)//, 4);

let grafC = new Graph([nodoA, nodoB, nodoC, nodoD], [arcA, arcB, arcC, arcD]);
console.log(isDAG(grafC))//, false); // false