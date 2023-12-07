function Decorateur(options){
    return function(target){
        console.log(target , options)
        const e = new target(options.etudiants , options.selecteur);
        console.log(e);
        // on vient de faire un new dans notre décorateur 
    }
}

@Decorateur({
    selecteur : ".intro",
    etudiants : ["Alain" , "Céline"] 
})
class Formation{
    constructor( private option : Array<string> , private texte : string  ){ 
    }
}

// cas pratique

// créer le fichier 03-exo.ts 

// ce fichier contient une class Exo 
// cette class contient 3 propriétés privées
// option1 string 
// option2 interface Etudant nom string / age number
// option3  boolean 

// ajouter une fonction décoratrice qui permet de créer une instance de la class Exo 

// tsconfig.json 
// créer à la main 
// créer via la commande tsc --init 