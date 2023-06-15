(()=>{

    // class Avenger{
    //     nombre: string = 'oihgih';
    //     equipo: string;
    //     nombreReal: string;

    //     puedePelear: boolean;
    //     peleasGanadas: number;

    //     constructor(nombre:string){
    //         this.nombre = nombre
    
    //     }
    // }

    class Avenger{
        // nombre: string = 'oihgih';
        // equipo: string;
        // nombreReal: string;

        // puedePelear: boolean;
        // peleasGanadas: number;

        constructor(public nombre:string,
            public equipo:string,
            public nombreReal?:string,
            public puedePelear?:boolean,
            public peleasGanadas:number = 0 ){
            
    
        }
    }
    
    const antman = new Avenger('Hormiga', 'Los hormigones', )


    console.log(antman.nombre);
    
})();