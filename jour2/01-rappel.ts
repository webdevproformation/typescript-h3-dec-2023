/* Typescript langage créé par Microsoft 
le même créateur que le C# */

// Typescript = javascript (quelquesoit la version ) + mot clé en plus => Typescript est un superset de javascript 

// SASS => super set de css 

// créer de fichiers .ts 
// en plus utiliser un transpiler (outil qui traduit .ts => .js)
// npm i -g typescript => tsc 

// gcc 

// typage => 
// annotations 

let a : string = "valeur";
let b : number = 1000 ;
let c : boolean = true ; 

let d : any = true;
d  = [true]; // 
d = function() {} // le comportement de javascript 
// dans la mesure du possible ne pas l'utiliser 

// tableau => stocker plusieurs valeurs 
let e : string[] = ["a", "b"]
let f : Array<string> = ["a", "b"]  // Généricité 

// objet 3 manières de les types 

type TotoType = { // ajouté par la suite 
    nom : string ,
    age : 1 | 2 
}

let t : TotoType = {
    nom : "texte",
    age : 2 
}

interface TotoInterface { // d'abord interface 
    nom : string ,
    age : 1 | 2 
}

let t1 : TotoInterface = {
    nom : "texte",
    age : 2 
}

class TotoClass{
    nom : string;
    age : 1 | 2
}

let t2 : TotoClass = {
    nom : "texte",
    age : 2 
}

// différence entre type / interface 

// historiquement d'abord interface (présentation dans tous les langages où tu fait de la POO => PHP / Java) 
// type après  (spécifique à Typescript)

// on peut faire certaines opérations sur les types que l'on ne peut pas faire sur les interfaces 

// UNION 
// certaines opérations 

type DemoType = string | number ;

interface Demo2Interface {}

// ------ 

// surcharger une interface

interface AInterface{
    age : number
}

interface AInterface{
    nom : string
}

let u : AInterface = {
    age : 20,
    nom : "toto"
}

interface Document {
    distance : number
}

let doc : Partial<Document> = {
    distance : 20
}

// fonction 

function calcul (a : number , b : number) :string{
    return ""; 
}

const division = ( a : number , b : number ) :string => {
    return ""; 
}


// division()

// npmjs.com

// généricité 
// type qui contient une partie variable 

function getLast <T>(  tableau : Array<T> ) : T {
    return tableau[tableau.length -1]; 
}

getLast(["A", "B"]);
getLast([1, 2]);
getLast([{id: 1}, {id: 2}]);

const h1 = document.querySelector('h1') as HTMLHeadElement

// class 

class Calcul{ // n'existe pas en js classique 
    private a : string ;
    public b : number ;
    protected c : Array<boolean> ; 
}

// depuis peu il est possible de créer de propriété privée en js 

class Calcul2{
    #a; 
    b ;
    c ; 
}




