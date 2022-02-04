//Ejercicio Promesies-funciones

const contratarJugador = new Promise( (resolve, reject) => {
    const contratado = true;
    if(contratado) {
        resolve('El jugador se incorpora al equipo')
    } else {
        reject( 'El jugador y el equipo no llegaron a un acuerdo');
    }
  
})

function mostrarMsj(msj) {
    console.log('Mensaje: ', msj);}


contratarJugador
        .then(mensaje => mostrarMsj(mensaje))
        .catch(err => console.log(err))

