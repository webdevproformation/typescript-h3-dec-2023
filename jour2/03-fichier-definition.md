Typescript a été créé APRES Javascript 

=> Typescript très apprécié par les utilisateurs de Javascript 

=> challenge rendre compatible les projets anciens les projets anciens 100% écrit en javascript 

=> le point important il n'est passible d'ajouter le typage sur des fichiers .js 

=> pour les librairies anciennes : jquery 
=> rendre compatible avec typescript 
=> ajouter des fichiers de définition 

=> ajouter en + que la librairie javascript 
que vous télécharger depuis npmjs.com

=> https://www.npmjs.com/package/jquery
=> ajouter en plus de votre
=> npm i jquery
=> npm i @types/jquery --dev 

=> dans le dossier node_modules
=> des fichiers .d.ts 

dans un fichier .d.ts => vous allez trouver uniquement des signatures
uniquement la partie donne un nom à la fonction ET en plus 
typage 
=> grâce à ces fichiers de types que vos projets en js sont compatibles 
<TElement extends Element = HTMLElement>(
        selector: JQuery.Selector,
        context?: Element | Document | JQuery | JQuery.Selector,
): JQuery<TElement>;


// dans le dossier jour2
// télécharger la librairie lodash => disponible sur npmjs.com
// télécharger les fichiers .d.ts => lien directement 

// utiliser la méthode _.random dans un fichier .ts de votre choix

// traduire votre fichier .ts => .js

