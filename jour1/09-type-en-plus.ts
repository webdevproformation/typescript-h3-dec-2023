// UNION |
export {};

let a : string | number | boolean = "hello" ; 

// enum 
// à la fois un type ET une valeur
 

enum STATUS {
    OPEN = "ouvert" ,
    LOADING = "encours" ,
    CLOSED = "fermé" 
}

// enum typer les paramètres de la fonction 
function genererFacture( id :number , status : STATUS ){

}

// ET Forcé aussi d'utiliser l'enum pour donner la valeur

genererFacture( 1 , STATUS.OPEN ) ;  
genererFacture( 1 , STATUS.CLOSED ) ;

// je ne peux pas utiliser de chaine de caractère 
// qui aurait la valeur stockée dans l'ENUM 


function genererPdf( etat : STATUS ) : STATUS  {

    if(etat === STATUS.LOADING){
        return STATUS.LOADING ; // OK 
    }
    return STATUS.CLOSED
}

const statusOuvert = STATUS["CLOSED"] ; 

// doit rentrer dans le langage javascript

// https://masteringjs.io/tutorials/fundamentals/enum

let b : any = "texte";
b = [];
b = {} ; 

// il faut l'utiliser le moins possible dans votre projet ce type car 
// on perd la documentation donnée par typescript 

// any n'importe quoi 

// unknown
// je ne le connais pas pour l'instant 
// et je vais le définir plus tard dans mon code 

type EtudiantType ={
    age : number ,
    id : number
}

function getData( url : string , resultat : unknown ){
    
    // requete => resultat 
    // je connais son contenu 

    // je redefinis le type du paramètre résultat 
    // au moment de l'exécution du code 
    const r = resultat as EtudiantType ; // défini le type de la variable résultat 

    r.age ; 

    (resultat as EtudiantType).age ; 

    (<EtudiantType>resultat).age ; 
}


let d : string | number = "bonjour" ;


(<string>d) ; // Typescript 
(d as string) ;  // Typescript 

type ArticleType = {
    userId : number 
    id :  number
    titre : string ,
    body : string
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then( function(reponse){ return reponse.json()})
    .then((data : Array<ArticleType>  ) => {})


