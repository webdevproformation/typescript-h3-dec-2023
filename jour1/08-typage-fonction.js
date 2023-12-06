"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// typer les paramètres de fonction
// typer le retour de la fonction 
function calcul(a, b) {
    return a + b;
}
// calcul(a: number, b: number): void // void rien 
// fonction fléchée 
var soustraction = function (a, unite) {
    return "".concat(a - 19, " ").concat(unite);
};
function genererPdf(document) {
    // au moment du codage // document automatique qui est ajoutée 
    return document.titre.toLowerCase();
}
var doc = genererPdf({ titre: "Formation", nbPage: 2, version: 5 });
console.log(doc);
// tsc 08-typage-fonction.ts
