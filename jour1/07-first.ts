// par défaut Typescript va ajouter un type aux variables
// automatiquement / déduire / inférence

const a = "Bonjour"; // automatiquement type déduit 
                     // const a : "Bonjour" 
                     // typage déduit type "Bonjour" string 

let b = "hello" ; // modifier la valeur contenu dans la variable b 

b = "comment allez vous ?";
b = "cv !"; 
b = 2 ; 

let c : number = "hello" ;  
// le fait d'ajouter du typage via des 
// annotation va permettre de 
// rendre le code plus sécurite / lisible
// pour le développeur 

c.toLowerCase();
c.toUpperCase();

// exécuter par le compilateur node 07-exo.js 
// détecter des erreurs (de typage)
// AVANT l'exécution 
// détecte les erreurs à la compilation
// gcc 
// tsc 

const etudiant = "Alain" ; 
// typescript ou en javascript 
// tu ne peux plus modifier la valeur 
// stockée dans la variable etudiant

let ecole  = "H3Hitema"; 
// typescript ou en javascript 
// tu peux modifier la valeur 
// stocker dans la variable ecole 

// en javascript  ecole = []; 
// en javascript  ecole = 2; 
// ok pour js 

// en type OBLIGATOIREMENT string 
// ecole = "Art et Métiers";
// ecole = "autre école";
ecole = 2;

let formation : string| boolean = "web";

formation = "js";
formation = false ; 
// erreur 
formation = [] ; // 

// typage par annotation variable : type 

let d : string = "a";
let e : number = 1 ;
let f : boolean = 10 > 3 ;

let g : any = []; // exactement le comportement du javascript
g = 1;
g = "bonjour";
g = {} ;
// aucune erreur sortie par le compilateur
// quand on écrit du javascript 

// cas plus précis 

let h : 'GET' = "GET" ; // cas particulier de string 

let etatFacture : "Encours" | "Payée" | "Refusée" ; // string litteral 

let prix : 10 | 20 | 30 ; // number litteral 


// type variable simple 

// type pour les variables complexes => variables qui contiennent plusieurs valeurs 


const i = [ 1,2,3  ]; // i : number[] => tableau de chiffres
const j = [ 1,2,3 , "a" ]; // i : ( number | string )[] => tableau de chiffres

let k : string[] = []; 
k[0] = "bonjour" ; 
k.push("bonjour") ; 

let l : Array<number> = [] ; // généricité

// deux manières de typer des tableaux 
// string[] 
// Array<string> // Généricité 
// les deux notations sont équivalentes


// denières types de variables que l'on peut typer => les objets 
// il existe de nombreuses manières de types des objets 

// première manière de typer les objets via des interfaces

interface EtudiantInterface {
    nom : string 
    age : number
    adresse : string
}

/* interface Etudiant2Interface {
    nom : string ,
    age : number ,
}

interface Etudiant3Interface {
    nom : string ;
    age : number ;
} */

let m : EtudiantInterface = {
    nom : "Alain",
    age : 20,
    adresse : "texte"
};

type FormeType = {
    largeur : number,
    hauteur : number ,
    unite : "cm" | "km"
}

let n : FormeType  = {
    largeur : 20,
    hauteur : 30 ,
    unite : "cm"
}


// tableau complexe qui contiennent des objets 

type EtudiantType = {
    id : number ,
    nom : string
}

type TableauEtudiantType = Array<EtudiantType> // généricité
type TableauEtudiant2Type = EtudiantType[]  // autre syntaxe possible 

const data : TableauEtudiant2Type = [
    { id : 1 , nom : "Alain"},
    { id : 2 , nom : "Céline" },
]

// -------------------------

class Etudiant {
    prenom : string ;
    nom : string ; 
}

const zorro : Etudiant = {
    prenom : "zorro",
    nom : "toto"
}


// ---- 

// créer un nouveau fichier 08-exo.ts
// ce fichier va contenir plusieurs variables
// veuillez les typer les variables suivantes correctement :

// liste1 = "pêche poire ananas";
// liste2 = ["pêche" , "poire", "ananas"];
// liste3 = ["pêche", 4, "poire", 3, "ananas" , 2];
/* liste4 = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};*/
/* liste5 = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];*/

// faire en sorte que vos variables soient protégées 
// transformer le fichier .ts en .js

