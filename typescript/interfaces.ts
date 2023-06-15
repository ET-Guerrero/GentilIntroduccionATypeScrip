
(()=>{

    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string
    }
    
    const enviarMision = (xmen: Xmen) => {
        console.log(`Enviendo a ${xmen.nombre} a la mision`);
    }

    const regresarAlCuartel = (xmen: {nombre: string}) => {
        console.log(`Enviando a ${xmen.nombre} al HQ`);
        
    }

    const wolwerine: Xmen = {
        nombre: 'Logjan',
        edad: 60
    }

    enviarMision(wolwerine)
    regresarAlCuartel(wolwerine)
})();
