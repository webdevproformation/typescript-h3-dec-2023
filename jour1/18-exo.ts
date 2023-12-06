class Exo{
    constructor(
        private duree : number ,
        protected age : number ,
        public largeur : number ,
        private unite : string ,
        public options : Array<number>
    ){}
}

let exo = new Exo(2,1,20,"cm" , [1,2])

exo.largeur
exo.options
exo.duree ; 


/*
Enoncé :
0 créer un nouveau fichier 19-exo.ts
1 Récupérez la class Produit suivante 
2 ajoutez les setter et getter pour l'attribut _ref et modifier le constructeur de la class

3 créer deux instances de la class Produit avec les arguments suivants :
    name     |     ref
  "Btwin"    | "Decathlon"
  "Peugeot"  |     206

4 affichez les deux instances dans la console du terminal et transpiler le fichier .ts en .js (version ES3)


class Product {
    private _name: string;

    constructor(name: string) {
        this.name = name; // setter assigne une valeur à l'attribut _name
    }

    // setter
    set name(name: string) {
        this._name = name;
    }

    // getter
    get name(): string {
        return this._name;
    }

} */
