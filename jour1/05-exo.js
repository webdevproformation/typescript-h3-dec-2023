// coder
// terminal 
// cd jour1
// tsc 05-exo.ts --target es5
// tsc 05-exo.ts --target es5 --watch
var a = ["lundi", "mardi", "mercredi"];
var r = a.map(function (jour) {
    return jour.substring(0, 1).toUpperCase() + jour.substring(1);
});
console.log(r);
// tsc 05-exo.ts --target es5  && node 05-exo.js
// traduction                  && exécuter 
// ts-node 05-exo.ts --target es5
