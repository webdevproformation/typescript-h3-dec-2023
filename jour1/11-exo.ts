type ObjectType = {
    age : number ,
    competences : Array<number|string> ,
    duree : 1 | 2 | 3 
}; 

let objet : ObjectType = {
    age : 22 ,
    competences : ["a", "b", "c"],
    duree : 2 
}

objet.competences.forEach(element => {
    // narrowing 
    if(typeof(element) === "string"){
        element
    }
    // type casting 
    (<string>element) ;
    (element as string ) ;
});