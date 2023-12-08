import { Injectable } from '@angular/core';

type ArticleType = {
  id : number ,
  titre : string ,
  contenu : string ,
  url : string 
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getOneById( id :string ) : ArticleType | undefined {
      console.log(id)
      return this.getData().find(function(article:ArticleType){
        return article.id == parseInt(id)
    })
  }

  public getData() : Array<ArticleType>{
    return [
      { id : 1 , titre : "article 1" , contenu : "lorem ipsum" , url : "https://via.placeholder.com/400x200" },
      { id : 2 , titre : "article 2" , contenu : "lorem ipsum" , url : "https://via.placeholder.com/400x200" },
      { id : 3 , titre : "article 3" , contenu : "lorem ipsum" , url : "https://via.placeholder.com/400x200" },
      { id : 4 , titre : "article 4" , contenu : "lorem ipsum" , url : "https://via.placeholder.com/400x200" },
      { id : 5 , titre : "article 5" , contenu : "lorem ipsum" , url : "https://via.placeholder.com/400x200" },
      { id : 6 , titre : "article 6" , contenu : "lorem ipsum" , url : "https://via.placeholder.com/400x200" },
    ]
  }
}
