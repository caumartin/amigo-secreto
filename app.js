// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [] // lista donde se guardaran los nombres ingresados

const ingresoDeAmigo = document.getElementById('amigo');  // variable que controla el INPUT para ingresar amigos

const muestraAmigos = document.getElementById('listaAmigos'); // variable que controla el UL donde mostraremos los amigos ingresados

const muestraGanador = document.getElementById('resultado');

function agregarAmigo () {

        let amigoIngresado = ingresoDeAmigo.value;

        if (amigoIngresado == '') {

            alert ('Debe ingresar un nombre válido');

        } else {

            listaDeAmigos.push(amigoIngresado);
            ingresoDeAmigo.value = '';
            console.log (listaDeAmigos);
            const nuevoAmigo = document.createElement('li');
            nuevoAmigo.innerHTML = amigoIngresado;
            muestraAmigos.appendChild(nuevoAmigo);

        }

}

function sortearAmigo () {

        const section = document.getElementById('input-section');
        section.removeChild(muestraAmigos);
        numeroAleatorio = Math.floor(Math.random () * listaDeAmigos.length);
        console.log (listaDeAmigos[numeroAleatorio]);
        const amigoSorteado = document.createElement('li');
        amigoSorteado.innerHTML = `El amigo secreto sorteado es: ${listaDeAmigos[numeroAleatorio]}`;
        muestraGanador.appendChild(amigoSorteado);       

}