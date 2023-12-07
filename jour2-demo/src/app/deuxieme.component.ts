import { Component } from "@angular/core"

@Component({
    template : "<h2>Deuxieme composant</h2>",
    selector : "deuxieme",
    standalone: true
})
export class Deuxieme {}

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
