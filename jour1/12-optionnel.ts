export {};

interface AInterface{
    largeur : number ,
    unite ?: string // la propriété est optionnelle
}

const a : AInterface = { largeur : 20 }
const b : AInterface = { largeur : 20 , unite : "cm" }

type BType = {
    age : number,
    isAdulte ?: boolean 
}