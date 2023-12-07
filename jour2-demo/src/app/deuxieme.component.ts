import { Component } from "@angular/core"

@Component({
    template : "<h2>Deuxieme composant </h2>",
    selector : "deuxieme",
    standalone: true
})
export class Deuxieme {
}

// 1 créer le composant 
// le déclarer dans le fichier app.component.ts 
/*
2 le déclarer dans le composant Racine de l'application  app.component.ts 
dans le fichier app.component.ts 
a import 
import { Deuxieme } from "./deuxieme.component" // déclaration

b ajout dans la liste des imports dans le décorateur 
imports: [CommonModule, RouterOutlet , Premier , Deuxieme ****  ],
*/

// 3 exécuter dans la vue du composant app.component.html
// exécuter dans la vue du composant racine app.component.html
// <deuxieme></deuxieme>

// cas pratique 
// créer un composant qui s'appelle Exo1
// ce composant va retourner le html suivant <p>je suis exo 1</p>

// une fois le composant créé => déclarer dans le composant racine app.component.ts
// exécuter le composant dans la vue du composant racine 