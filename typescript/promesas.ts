(()=>{
    const retirarDinero = (monto:number): Promise<number> => {

        let dineroActual = 1000;

        return new Promise( (resolve, reject)=> {

            if (monto > dineroActual) {

                reject('No hay suficiente dinero')                
            } else {

                dineroActual -= monto;
                resolve(dineroActual)
            }
        });
    }

    retirarDinero(500) 
    .then(montoActual => console.log(`Me queda ${montoActual}`))
    .catch( console.warn)    

})();

