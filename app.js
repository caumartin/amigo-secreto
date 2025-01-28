// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [] // lista donde se guardaran los nombres ingresados

const ingresoDeAmigo = document.getElementById('amigo');  // variable que controla el INPUT para ingresar amigos

const muestraAmigos = document.getElementById('listaAmigos'); // variable que controla el UL donde mostraremos los amigos ingresados

function agregarAmigo () {

        let amigoIngresado = ingresoDeAmigo.value;

        if (amigoIngresado == '') {

            alert ('Debe ingresar un nombre válido');

        } else {

            listaDeAmigos.push(amigoIngresado);
            ingresoDeAmigo.value = '';
            console.log (listaDeAmigos);

        }

}

function sortearAmigo () {

        numeroAleatorio = Math.floor(Math.random () * listaDeAmigos.length)
        console.log (listaDeAmigos[numeroAleatorio])

}