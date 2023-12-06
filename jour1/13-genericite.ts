// généricité ça fonctionne uniquement sur les class et sur les fonctions 
// vous ne pouvez pas les utiliser sur des variables 


function first ( tableau : Array<string>  ) : string {
    return tableau[0];
}

first(["a", "b" , "c"]); 

function first2 ( tableau : Array<number>  ) : number {
    return tableau[0];
}

first2([1, 2 , 3]); 

// généricité => l'équivalent de mettre des variables dans le type 


// ça permet de créer une fonction générique 
function first3 <G> ( tableau : Array<G> ) : G{ 
    return tableau[0] ;
}

first3([1,2,3])
first3(["a","b","b"])

first3([{id : 1},{id : 2}]); // déterminer le type des valeurs stockées dans la variable au moment de l'exécution 
// permet de garder la document automatique générée par TypeScript 


function calcul <A,B> ( a : A , b : B ) : Array<A|B>{
    return [a , b]
}

calcul(1 , 2)
calcul(1 , [])
calcul("" , true) ; // laisser la main à type script pour déterminer le type des variables

// utiliser la généricité pour laisser la main à typescript de déterminer le type de nos variables au moment l'exécution ! 

calcul<string, number> ("" , 2)

// Array<> type qui est générique 

const heading = document.querySelector(".br") as HTMLHeadElement

// a 
// h1
// p ... 
heading.innerHTML

// rdv 15h20 bon café @ toute suite !!!
