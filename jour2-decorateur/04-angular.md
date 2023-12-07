https://formation.webdevpro.net/angular/
login : angular 
password : microsoft

// angular 

présentation du framework angular 
concurrent de React 

Attention ne pas confondre AngularJS (version 1 ) du framework
jquery
Angular (à partir de la version 2)

documentation officielle : https://angular.io/

https://w3techs.com/technologies/overview/javascript_library

créer un projet angular 

npm i -g @angular/cli

css ou ... => Enter 
rendu => Enter 

créer un dossier jour2-demo 
dans ce dossier vous allez avoir une structure de projet angular prête 

cd jour2-demo



ajouter un nouveau binaire en ligne de commande
ng version

la version d'Angular que l'on va tester => version 17 

ng new jour2-demo

ng serve -o

utilise webpack pour créer un bundle des fichiers js qui sont exécutés dans le navigateur 

serveur interne => http://localhost:4200/

vous avez un dossier src => DANS ce dossier que l'on va travailler à 95% du temps

src => dans ce dossier où l'on va travailler 

index.html => <app-root></app-root>
tout ce que l'on va faire => insérer dans cette balise

main.ts lien entre vos fichiers .ts ET le navigateur 

assets : image / pdf / fichiers / logo / font 

4 fichiers qui vont travailler ensemble : 
 app.component.css
 app.component.html
 app.component.spect.ts
 app.component.ts


=> par rapport à React => utilise des class (et non des fonctions )
=> et la class vont être associées à des décorateurs
=> décorateur permet de greffer des comportements en plus à vos composants 

ouvrir un deuxieme terminal
cd jour2-demo
ng generate component quatrieme