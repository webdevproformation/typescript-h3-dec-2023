import { Component } from '@angular/core';

@Component({
  selector: 'app-quatrieme',
  standalone: true,
  imports: [],
  templateUrl: './quatrieme.component.html',
  styleUrl: './quatrieme.component.css'
})
export class QuatriemeComponent {
  public urlImage : string = "https://via.placeholder.com/400x200"; 
  // utiliser la valeur stockée dans la variable urlImage
  // propriété d'une balise <img src="https://via.placeholder.com/400x200" alt=""/>
  public urlImage2 : string = "https://via.placeholder.com/400x100";
  public titre: string = "une image factice"
  public titreAvecHTML: string = "une image <br> factice"
  // document.querySelector("img").src
  public nb : number = 10 ; 

  public onClick(){
    // alert("j'ai cliqué");
    this.nb++;  // useState() n'existate pas dans Angular
    // si un propriété du composant est modifiée suite ç une action de l'utilisateur
    // la partie vue du composant va être réexécuté instantannement 
  }
}
// ng generate component quatrieme

// cas pratique 
// créer le composant Exo3
// ce composant contient propriété show par défaut vaut true 
// ce composant contient aussi une méthode onClick qui change la valeur de la propriété show true à false puis de false à true 
// dans la partie vue du composant 
// un bouton => si clique sur le bouton => masquer le p si je reclique sur le bouton afficher le p 
// p qui contient le texte bonjour