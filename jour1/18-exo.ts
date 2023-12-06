class Exo{
    constructor(
        private duree : number ,
        protected age : number ,
        public largeur : number ,
        private unite : string ,
        public options : Array<number>
    ){}
}

let exo = new Exo(2,1,20,"cm" , [1,2])

exo.largeur
exo.options
exo.duree ; 

