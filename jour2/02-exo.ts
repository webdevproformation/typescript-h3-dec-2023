export {}
// permet de dire à Typescript que le fichier est un module 
// indépendant des autres fichiers 

interface Coordonnee {
    x : number ,
    y : number
}

function drawLigne( origin : Coordonnee , final : Coordonnee ) : string{
    return `la ligne a ${origin.x} ${origin.y} comme point de départ et ${final.x} ${final.y} comme point final` ; 
}

const resultat = drawLigne( { x : 0 , y : 0} , {  x : 100 , y : 30 } ); 

console.log(resultat);

// tsc 02-exo.ts && node 02-exo.js

// installation du binaire ts-node
// npm init --yes
// npm i ts-node --dev

// npx ts-node 02-exo.ts 
// pas de création de fichier .js intermédiaire 
// directement réussir à exécuter le fichier .ts 
