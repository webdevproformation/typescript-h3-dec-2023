function Decorateur(options){
    return function(target){
        console.log(target , options)
        const e = new target(options.etudiants , options.selecteur);
        console.log(e);
        // on vient de faire un new dans notre décorateur 
    }
}

@Decorateur({
    selecteur : ".intro",
    etudiants : ["Alain" , "Céline"] 
})
class Formation{
    constructor( private option : Array<string> , private texte : string  ){ 
    }
}