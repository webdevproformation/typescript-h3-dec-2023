// npm i  lodash
// npm install --dev @types/lodash

import _ from "lodash";
import $ from "jquery"

const chiffre = _.random(0 , 10);

console.log(chiffre); 

// ts-node
// npx ts-node 05-exo.ts

const chiffre2 = Math.ceil(Math.random() * 10 );

console.log(chiffre2); 

// plein de fonctions utilitaires 

const tab1 = ["a", "b" , "c"];
const tab2 = ["a", 1, 2] ;

const dif = _.difference(tab1, tab2);
console.log(dif)

$("h1").html("toto")