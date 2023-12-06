var Product = /** @class */ (function () {
    function Product(name, ref) {
        this.name = name; // setter assigne une valeur à l'attribut _name
        this.ref = ref;
    }
    Object.defineProperty(Product.prototype, "name", {
        // getter
        get: function () {
            return this._name;
        },
        // setter
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ref", {
        // getter
        get: function () {
            console.log("getter de ref");
            return this._ref;
        },
        set: function (ref) {
            console.log("setter de ref");
            this._ref = ref;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var produit1 = new Product("Btwin", "Decathlon");
produit1.ref = "autre ref"; // setter de la class qui est public 
produit1.ref; // getter de la class qui est public 
console.log(produit1);
