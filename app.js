// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaPersonas = [];

function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    if(amigoIngresado == ''){
        alert("Por favor ingrese un nombre válido");
    }else{
    listaPersonas.push(amigoIngresado);
    }
    limpiarCaja();
    mostrarLista();
}

function mostrarLista(){
    let texto = '';
    for(let a = 0; a < listaPersonas.length; a++){
        texto += '<li>' + listaPersonas[a];
    }
    asignarTextoElemento('#listaAmigos',texto);
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    let numeroMaximo = listaPersonas.length;
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    let seleccion = 'El amigo secreto sorteado es: ' + listaPersonas[numeroGenerado-1];
    asignarTextoElemento('#listaAmigos','');
    asignarTextoElemento('#resultado', seleccion);    
}