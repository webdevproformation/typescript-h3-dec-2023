let liste1 :string = "pêche poire ananas";
let liste2 : Array<string> = ["pêche" , "poire", "ananas"];
let liste3 : Array<string|number> = ["pêche", 4, "poire", 3, "ananas" , 2];

// plusieurs solutions possibles
// grande interface 
// solution 1
interface ListeInterface {
    items : Array<string|number> ,
    budget: number ,
    unite : "euros" | "dollars"
}

// solution 2
type TableauChiffreLettreType = Array<string|number>

type ListeType = {
    items : TableauChiffreLettreType ,
    budget: number ,
    unite : "euros" | "dollars"
}

let liste4 : ListeType  = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};

// solution 1
type TableauProduitType = Array<{ id : number , nom : string , quantite : number}>

// solution 2
interface ProduitInterface {
    id : number , nom : string , quantite : number
}

type TableauProduit2Type = Array<ProduitInterface>

let liste5 : TableauProduit2Type = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];

