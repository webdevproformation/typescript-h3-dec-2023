// généricité 
// il existe des types utilitaires
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// fonction qui permet de créer des types à partir d'un autre type 

type EtudiantType = {
    age : number ,
    nom : string 
}
// type utiliaire

type EtudiantPartialType = Partial<EtudiantType>;
// rend toutes les propriétés du type facultatif

const e : EtudiantPartialType  = { 
    age : 10 ,
    nom : "hello"
}

type OptionsType = {
    ip ?: string ,
    domain ?:string 
}

type OptionsRequiredType = Required<OptionsType>


interface Todo {
    title: string;
    description: string;
    completed: boolean;
}
// prendre tout sauf title

type TodoShort = Pick<Todo, "description" | "completed" >

const todo : TodoShort = { 
    description : "texte",
    completed : false
}

type TodoSansEtatType = Omit<Todo , "completed">
// prendre tout sauf celui que l'on a omit

const todo2 : TodoSansEtatType = { 
    title : "un peut de texte",
    description : "texte",
}


// je dois forcer les clés d'un objet 

type CleOptionType = "open" | "closed" | "loading" ;

type ValueOptionType = {
    ip : string ,
    machine : string
}

type OptionType = Record<CleOptionType , ValueOptionType>

const options : OptionType = {
    open :  { ip : "", machine : "laptop " },
    closed : { ip : "", machine : "laptop " },
    loading : { ip : "", machine : "laptop " }
}


// rendre une propriété d'un objet en Readonly 
// une fois attribuée la valeur de la propriété ne peut plus être modifiée

type NoteType = {
    nom : string ,
    valeur : number
}

type NoteReadOnly = Readonly<NoteType>;

let note : NoteReadOnly = {
    nom : "Alain",
    valeur : 20
}

note.valeur = 15 ; 


// cas pratique 
// créer le type suivant 

// Article 
// contient 5 propriétés
// titre  texte
// auteur text
// contenu text
// date_creation date
// etat boolean

// créer le type ArticleSynthese
// qui contient uniquement titre et date_creation

// créer le type ArticleTraducteur
// rendre facultatif contenu
// rendre obligatoire (readonly titre )
// rendre obligatoire (readonly etat )

// créer un nouveau type il doit avoir les clés suivantes 
// article => type Article
// categorie => string 
// etags => tableau de string  
