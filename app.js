// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Variables

let listaDeAmigos = [] // lista donde se guardaran los nombres ingresados

const ingresoDeAmigo = document.getElementById('amigo');  // variable que controla el INPUT para ingresar amigos

const muestraAmigos = document.getElementById('listaAmigos'); // variable que controla el UL donde mostraremos los amigos ingresados

const muestraGanador = document.getElementById('resultado'); // variable que controla el UL donde mostraremos el amigo sorteado

let juegoTerminado = false; // variable para inhibir los botones cuando hay un amigo sorteado


// Funciones

function agregarAmigo () {

        if (!juegoTerminado) { // si el sorteo está en curso

                let amigoIngresado = ingresoDeAmigo.value; // tomo el texto del elemento INPUT

                if (amigoIngresado == '') {

                    alert ('Debe ingresar un nombre válido'); // si es cadena vacía informo error

                } else {

                    listaDeAmigos.push(amigoIngresado); // caso contrario, agrego el amigo a la lista
                    ingresoDeAmigo.value = ''; // borro los caracteres del ingreso anterior
                    const nuevoAmigo = document.createElement('li'); // creo elemento LI para agregar amigo en el UL
                    nuevoAmigo.innerHTML = amigoIngresado; // asocio el nombre ingresado con el LI creado
                    muestraAmigos.appendChild(nuevoAmigo); // agrego el LI al UL
                }
        } else { // si el sorteo ya terminó lo informo

                alert('El juego ya terminó');
        }

}

function sortearAmigo () {

        if (!juegoTerminado) { // si el sorteo está en curso

                const section = document.getElementById('input-section'); // selecciono la section correspondiente
                section.removeChild(muestraAmigos); // para dejar de mostrar el UL con la lista de amigos
                numeroAleatorio = Math.floor(Math.random () * listaDeAmigos.length); // "sorteo" a un amigo
                const amigoSorteado = document.createElement('li'); // creo elemento LI para mostrar amigo en el UL
                amigoSorteado.innerHTML = `El amigo secreto sorteado es: ${listaDeAmigos[numeroAleatorio]}`; // asocio al LI el texto que muestra al amigo sorteado
                muestraGanador.appendChild(amigoSorteado); // agrego el LI al UL
                juegoTerminado = true; // se da por terminado el sorteo

        } else { // si el sorteo ya terminó lo informo

                alert('El juego ya terminó');

        }

}