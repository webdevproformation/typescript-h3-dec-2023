// class toutes les propriétés méthode sont public par défaut et uniquement en javascript 


class A{
    a ;
    b ; 
}

class B{
    #a ;
    #b ;  // # devant les propriétés deviennent privée 
    // en javascript 
}

// en javascript protected n'existe pas en javascript 

// par contre en type script vous pouvez utiliser 
// les mots clé private public protected 


class C{
    private a : string ;
    protected b : number ;
    public c : Array<string>  ; 
}


class D {
    a ;
    b ;

    constructor(a : string , b : string ){
        this.a = a ;
        this.b = b ; 
    }

}

// manière plus courte de créer un constructeur 
class E {
    constructor(public a : string , public b : string ){
        
    }
}

// créer le fichier 18-exo.ts 

// dans ce fichier vous allez créer une class Exo 
// cette class contient 5 paramètres
// duree => chiffre
// age   => chiffre
// largeur  => chiffre
// unite texte
// options  tableau de chiffre

// créer le constructeur  qui permet d'initialiser les 5 propriétés de cette class 


