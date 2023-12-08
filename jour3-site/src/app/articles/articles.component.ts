import { Component } from '@angular/core';
import { CommonModule } from "@angular/common"
import { DataService } from '../data.service';
import { RouterLink } from "@angular/router"

type ArticleType = {
  id : number ,
  titre : string ,
  contenu : string ,
  url : string 
}


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ CommonModule , RouterLink ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  
  public constructor(
    public articleService : DataService 
  
  ){
    // this.articleService = new DataService();
  }

  /* public articles : Array<ArticleType> = [
    { id : 1 , titre : "article 1" , contenu : "lorem ipsum" , url : "https://via.placeholder.com/400x200" },
    { id : 2 , titre : "article 2" , contenu : "lorem ipsum" , url : "https://via.placeholder.com/400x200" },
    { id : 3 , titre : "article 3" , contenu : "lorem ipsum" , url : "https://via.placeholder.com/400x200" },
    { id : 4 , titre : "article 4" , contenu : "lorem ipsum" , url : "https://via.placeholder.com/400x200" },
    { id : 5 , titre : "article 5" , contenu : "lorem ipsum" , url : "https://via.placeholder.com/400x200" },
  ] */

}
