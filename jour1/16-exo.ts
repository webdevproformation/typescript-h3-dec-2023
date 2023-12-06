type Article = {
    titre : string ,
    auteur : string ,
    contenu : string 
    date_creation : Date ,
    etat :  boolean
}

// ArticleSynthese

type ArticleSynthese = Pick<Article, "titre" | "date_creation">

// ArticleTraducteur
// rendre facultatif contenu
// rendre obligatoire (readonly titre )
// rendre obligatoire (readonly etat )

type ArticleTraducteur = Partial<Pick<Article, "contenu" >> & Readonly<Pick<Article, "titre" | "etat" >>

const a : ArticleTraducteur = {
    titre : "un titre",
    etat : true ,
    contenu : "un contenu"
};


// créer un nouveau type il doit avoir les clés suivantes 
// article => type Article
// categorie => string 
// etags => tableau de string  

type CleArticle = {
    article : Article
    categorie  : string
    etags : Array<string>
}

