import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

type Etudiant = {
    id : number ,
    nom : string ,
    isAdmin : boolean
}

type ListeEtudiantType = Array<Etudiant>; 


@Component({
    standalone: true,
    imports : [ CommonModule ],
    template : `
        <h2>afficher tous les étudiants</h2>
        <ul>
            <li *ngFor="let e of etudiants">
                nom : {{ e.nom }} - id : {{ e.id }}
            </li>
        </ul>
        <h2>afficher tous les étudiants admin (solution1)</h2>
        <ul>
            <li *ngFor="let e of etudiantAdmin()">
                nom : {{ e.nom }} - id : {{ e.id }}
            </li>
        </ul>
        <h2>afficher tous les étudiants admin (solution2)</h2>
        <ul>
            <li *ngFor="let e of etudiants">
                <span *ngIf="e.isAdmin"> nom : {{ e.nom }} - id : {{ e.id }} </span>
            </li>
        </ul>
    `,
    selector : "exo2"
})
export class Exo2{

    public etudiants : ListeEtudiantType = [  
        {id : 1 , nom : "Alain" , isAdmin : true} , 
        {id : 2 , nom : "Benoit" , isAdmin : false} 
    ]

    public etudiantAdmin() : ListeEtudiantType{
        return this.etudiants.filter(function(e){
            return e.isAdmin === true 
        })
    }

}