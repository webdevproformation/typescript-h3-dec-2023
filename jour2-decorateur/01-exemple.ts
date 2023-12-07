// pour pouvoir utiliser cette fonctionnalité avancée de typescript
//il faut obligatoirement ajouter dans le fichier tsconfig.json 
// l'option suivante => "experimentalDecorators": true

// le principe des décorateurs
// fonction qui modifie le comportement d'une class  

// fonction execute la class ci dessous 
function Decorateur(target ){
   const e = new target(["a", "b", "c"]);
   console.log(e);
}

@Decorateur //ajouter l'annotation directement sur la définition de la class 
class Etudiant{
    constructor( private option : Array<string> ){ 
    }
}

// pour pouvoir intervenir sur une code de manière non intrusive 
// modifier le comportement d'une class sans la recoder 

