Typescript


Parcel => écrire du typescript dans des projet HTML

tout l'infrastructure : 
- compilateur 
- serveur de dev
- script qui permet de réaliser un build

.html 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="fichier.ts"></script>
</body>
</html>

parcel index.html

--------------

fonctionnalité / syntaxe existe QUE sur Typescript
Décorateur 

fonctionnalité expérimentale
=> RFC => Request For Comment qui vient de Javascript

l'objectif ajouter / greffer des comportements / des traitements à une Class via une fonction 

function Toto(  options  ){
    // factory 
    return function( target ){
    }
}

@Toto({ // méta données
    selector : "div",
    css : "h1{ color : red }"
})
class A{

    
}

=> Angular tout le temps

Typescript => Microsoft 
Angular => Google 

Décorateur => fonction qui modifie une class 

-----

# Angular 

https://formation.webdevpro.net/angular
login :  angular
password :  microsoft

## install => ng 

npm i -g @angular/cli

ng version 

créer un projet 
`ng new projet`

## lancer le projet 

```bash
cd projet
ng serve -o 
```

## créer des composants

1. dans le dossier `src`
2. fichier premier.component.ts
3. dans ce fichier 

import { Component } from "@angular/core"

@Component({
    selector : "premier", // balise spéciale === le composant
    template : `le html qui va être affiché à l'écran` , // vue
    styles : [ le css associé au composant ],
    standalone : true ,
    imports : []
})
export class Premier{} 


## partager des informations entre la class et la vue 

import { FormsModule } from "@angular/forms"

@Component({
    selector : "premier", // balise spéciale === le composant
    template : ` {{ name }}    // interpolation
        {{ getName() }} 
        <img src="{{ url }}" alt="">
        <img [src]="url" alt=""> <!-- document.querySelector().src="" property binding -->
        <button (click)="onClick()"></button> <!-- event 
        <input  [(ngModel)]="valeur" > <!-- two way binding -->
        <select>
        <textarea>
    ` , // vue
    styles : [ le css associé au composant ],
    standalone : true ,
    imports : [ FormsModule ]
})
export class Premier{
    public valeur: number = 1 ;
    public name : string = "demo"
    public getName():string{
        return this.name ;
    }
    public url = "http//image.png"
    public onClick(){
        // exécution de la fonction
        this.name="toto" 
    }
} 


--- 

## boucle et conditions 



import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
    selector : "premier", // balise spéciale === le composant
    template : `
        <p *ngFor="let lettre of liste">{{ lettre }}</p>
        <p *ngIf="isAdmin"> bonjour admin</p>
    ` , // vue
    styles : [ le css associé au composant ],
    standalone : true ,
    imports : [ CommonModule ]
})
export class Premier{
    public liste : Array<string> = ["a", "b"]
    public isAdmin : boolean = true ; 

} 