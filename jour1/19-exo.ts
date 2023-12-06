class Product {
    private _name: string ;
    private _ref : string ; 

    constructor(name: string , ref : string) {
        this.name = name; // setter assigne une valeur à l'attribut _name
        this.ref = ref
    }

    // setter
    set name(name: string) {
        this._name = name;
    }

    // getter
    get name(): string {
        return this._name;
    }
    set ref(ref :string){
        console.log("setter de ref")
        this._ref = ref
    }

     // getter
     get ref(): string {
        console.log("getter de ref")
        return this._ref;
    }

}

const produit1 = new Product("Btwin", "Decathlon");


produit1.ref = "autre ref" ;  // setter de la class qui est public 
produit1.ref ;  // getter de la class qui est public 

console.log(produit1);
