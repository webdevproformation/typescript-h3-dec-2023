export interface ArticleInterface {
    id : number ,
    titre : string ,
    contenu : string ,
    url : string 
  }


export class Article implements ArticleInterface{
    public constructor(
        public id : number = 0 ,
        public titre : string = "",
        public contenu : string = "",
        public url : string = ""
    ){

    }
}
