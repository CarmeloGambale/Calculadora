const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesdeNumeros = document.querySelectorAll('.numero');
const botonesdeOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesdeNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesdeOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});