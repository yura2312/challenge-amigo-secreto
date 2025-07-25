//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let inputDeAmigo = document.querySelector('input');

function adicionarAmigoNaLista(amigo) {
    if (inputDeAmigo.value.trim() === '') {
        alert("Input inválido!")
        return adicionarAmigo
    } else {
        listaDeAmigos.push(amigo.trim());
        limparCampo(inputDeAmigo);
    }
}

function adicionarAmigo() {
    adicionarAmigoNaLista(inputDeAmigo.value);
    console.log(listaDeAmigos);
}

function limparCampo(elemento) {
    elemento.value = '';
}