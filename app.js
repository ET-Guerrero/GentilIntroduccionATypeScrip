"use strict";
(() => {
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
    class Avenger {
        // nombre: string = 'oihgih';
        // equipo: string;
        // nombreReal: string;
        // puedePelear: boolean;
        // peleasGanadas: number;
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Hormiga', 'Los hormigones');
    console.log(antman.nombre);
})();
