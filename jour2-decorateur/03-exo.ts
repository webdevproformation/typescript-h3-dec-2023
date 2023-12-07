
interface EtudiantInterface{
    nom : string 
    age : number
}

function Declare({ nom , etudiant , isAdmin }){
    return function ( target ){
        //console.log(target , options)

        const e = new target(nom , etudiant , isAdmin)
        console.log(e); 
    }
}

@Declare({
    nom : "Alain",
    etudiant : { nom : "Céline" , age : 22 },
    isAdmin : true
})
class Exo{
    constructor(
        private option1 : string , 
        private option2 : EtudiantInterface ,  
        private option3  : boolean 
    ){}
}

// voila pour l'introduction sur Typescript !! 
// intro sur Angular 
// rdv dans 1 heure => 13h30 bon appétit !!! 