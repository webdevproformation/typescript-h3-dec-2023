import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { DataService } from '../data.service';

type ArticleType = {
  id : number ,
  titre : string ,
  contenu : string ,
  url : string 
}

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent implements OnInit{

    public article : Partial<ArticleType> = {}; 

    public constructor(
      private route : ActivatedRoute ,
      private articleService : DataService ,
    ){}

   public ngOnInit(){
    const that = this ;
    this.route.paramMap.subscribe(function( result :any ){
      that.article = <ArticleType>that.articleService.getOneById(result.params.id)
    })  

    
   }
}
