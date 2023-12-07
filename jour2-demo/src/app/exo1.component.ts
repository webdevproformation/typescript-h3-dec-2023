import { Component} from "@angular/core"
import { CommonModule } from '@angular/common';

@Component({
    imports : [CommonModule] ,
    standalone: true ,
    template : `
        <hr>
        <h1>{{ titre }}</h1>
        <p>je suis l'exo 1  </p>
        <h2>afficher les éléments d'un tableau</h2>
        <p> {{ jours[0] }} {{ jours[1] }}</p>
        <h2>faire une boucle dans les composants angulars</h2>
        <ul>
            <li *ngFor="let jour of jours" >{{ jour }}</li>
        </ul>
        <h2>les conditions </h2>
        <p *ngIf="isVisible"> je suis affiché à l'écran</p>
    `,
    selector : "exo1"
})
export class Exo1 {
    // propriété dans la class 
    public titre : string = "je suis le titre du composant" ;
    public jours : Array<string> = ["lundi" , "mardi" , "mercredi"]
    public isVisible : boolean = false ;
}

// envoyer des informations de class vers la vue (le template)

// vous devez ajouter dans votre composant 
// le module suivante
// import { CommonModule } from '@angular/common';
// déclarer le module dans le Décorateur de votre imports : [CommonModule] ,

// vous avez accès aux Directives suivantes :
// <p *ngFor="let item if tableau">{item}</p>
// <p *ngIf="condition">afficher ici </p>

// créer le composant Exo2
// dans ce composant vous avez 2 propriétés 
// liste d'étudiants
// [  {id : 1 , nom : "Alain" , isAdmin : true} , {id : 2 , nom : "Benoit" , , isAdmin : false} ]

// afficher l'ensemble des étudiants dans la vue du composant 

// afficher dans la vue l'ensemble des étudiants qui sont admin 
// npm i 