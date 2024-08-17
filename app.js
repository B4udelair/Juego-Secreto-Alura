let numeroSecreto = 0;
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log (numeroSecreto);

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); 
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el Número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else { 
        //El usuario no acertó .

        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El Número Secreto es Menor");
        } else {
            asignarTextoElemento("p","El Número Secreto es Mayor");
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = " "; 
}

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los nnumeros
    if(listaNumerosSorteados.length ==numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los números posibles");
        document.querySelector('#reiniciar').setAttribute('disabled','true');
    }else {
    //Si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) { 
        return generarNumeroSecreto();
    } else { 
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado; } 
}

function condicionesIniciales() {
    asignarTextoElemento ("h1","Juego del Número Secreto!");
    asignarTextoElemento ("p",`Indica un Número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 0;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Denerar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales ();
    //Deshabilitar el boton de nuevo juego
    document.querySelector ('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales ();