// vous pouvez écrire du js classique 

const a = 2 ; // ES6
var b = "Bonjour"; // ES3
function calcul(){} // ES3
const division = () => { } // ES6 

class A{ // ES6 
    a ;
    b ; 
    constructor(a, b){
        this.a = a ;
        this.b = b ;
    }
    calcul(){}
    division(){}
}

// => traduire transformer en .js 
// cd jour1
// tsc 03-demo.ts (traduire le fichier .ts en version la plus ancienne / la plus compatible de javascript
// version 3 de javascript )

// tsc 03-demo.ts drapeau / options 
// tsc 03-demo.ts --target es6
// tsc 03-demo.ts --target es6 --removeComments

// https://www.typescriptlang.org/docs/handbook/compiler-options.html
// liste complète de tous les drapeaux disponibles dans la commande tsc 

// npm => package.json 

// tsc dispose d'un fichier de configuration 
// tsconfig.json 
// tsc va rechercher ce fichier 
// et il faut lire son contenu qui contient l'ensemble des drapeaux à utiliser 

// tsc 03-demo.ts --target es6 --removeComments
// tsc et vous avez un fichier tsconfig.json 
// tsc --init => permet de créer le fichier configuration 

// manière d'utiliser le traducteur 
// tsc ..... nombreuses instruction
// tsc + fichier tsconfig.json 

// vous ne pouvez pas utiliser les deux manières le compilateur 
// soit tsc + tsconfig.json / tsc + options 

// --watch 
// l'option watch ( sass )
// permet d'écrire dans un fichier .ts => automatiquement traduire 
// votre fichier .js sans avoir à relancer en permanence la commande tsc 