// écrire du javascript classique 
// js en version 2015 => ES6 
const a = () => {
    return 30 ;
}

class B{
    a;
    b;
    constructor( a, b ){
        this.a = a;
        this.b = b;
    }
}

class C extends B{
    calcul(){}
}

// cas pratique 
/**
 * créer un script 05-exo.ts 
 * Parcourir tous les éléments du tableau suivant et mettre la première lettre du mot en majuscule
 * du tableau tableau = ["lundi", "mardi", "mercredi"]

Lundi
Mardi
Mercredi

Astuce : .slice() ou subtr()
une fois créer le script .ts => traduire en version 5 de javascript  .js 
 */