
// typage par inférence (déduire )

let a = "texte";


// typage par annotation 

let b : number | boolean = true ;

// typage par typecasting 
// préciser // réduire le typage via le mot clé as 

let tableau : unknown = [];

(<Array<string>>tableau)  = ["hello"]; // modifier pendant l'exécution
(tableau as Array<string>) = ["comment allez vous ?"] ; 

// typage narrowing 
// rétrécissement 
function division( a : number | string ){

    if(typeof(a) === "string"){ // typeof 
        a.toLocaleLowerCase();
    }
    (a as string).toLocaleLowerCase();
}

// créer un nouveau fichier 11-exo.ts 
// dans ce fichier vous allez créer un objet qui contient 3 propriétés 
/*
age  => chiffre
competences  tableau qui contient chiffre ou des lettres
duree  soit le chiffre 1 ou le chiffre 2 ou le chiffre 3

créer le type qui permet de typer cet objet 

utiliser la propriété competence de cet objet sur la partie string 
créer une fonction qui parcours toutes les compétences 
// vous allez faire en sorte que les valeurs du tableau ne soient QUE des string 

*/




