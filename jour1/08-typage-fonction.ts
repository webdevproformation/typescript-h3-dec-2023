import { DocInterface } from "./08-interface"


// typer les paramètres de fonction
// typer le retour de la fonction 
function calcul ( a : number , b :number  ) :number {
    return a + b  ; 
}

// calcul(a: number, b: number): void // void rien 
// fonction fléchée 
const soustraction = (a :number , unite :string ) : string => {
    return `${a - 19} ${unite}` ; 
}   

function  genererPdf (document : DocInterface) : string {
    // au moment du codage // document automatique qui est ajoutée 
    return document.titre.toLowerCase();
}

const doc = genererPdf({ titre : "Formation" , nbPage : 2 , version : 5 })

console.log(doc)
// rdv 13h35 bon appétit !!!!!

// tsc 08-typage-fonction.ts
// tsc 08-typage-fonction.ts &&  node 08-typage-fonction.js