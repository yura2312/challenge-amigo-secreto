//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let inputDeAmigo = document.querySelector('input');
let listaDeAmigosHTML = document.getElementById('listaAmigos');
let sorteadoHTML = document.getElementById('resultado');
function adicionarAmigoNaLista(amigo) {
    if (inputDeAmigo.value.trim() === '') {
        alert("Input inválido!")
        return;
    }
    else if (contemDuplicata(amigo)) {
        return;
    }
    else {
        listaDeAmigos.push(amigo.trim());
        limparCampo(inputDeAmigo);
        adicionarAmigoHTML();
    }
}

function adicionarAmigo() {
    adicionarAmigoNaLista(inputDeAmigo.value);
    console.log(listaDeAmigos);
}

function limparCampo(elemento) {
    elemento.value = "";
}

function adicionarAmigoHTML() {
    listaDeAmigosHTML.innerHTML = ""; //Limpa a lista antes de adicionar elementos, para evitar duplicatas
    listaDeAmigos.forEach(amigo => {
        let novoLi = document.createElement('li');
        novoLi.textContent = (`${amigo}`);
        listaDeAmigosHTML.appendChild(novoLi);
    });
}

function contemDuplicata(amigo) {
    if (listaDeAmigos.includes(amigo)) {
        alert(`${amigo} já esta na lista!`);
        return true;
    }
    return false;
}

function sortearAmigo() {
    if (listaDeAmigos == []) {
        alert("Lista vazia!");
        return;
    } else if (listaDeAmigos.length === 1 ) {
        alert("Apenas um amigo na lista!");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let sorteado = listaDeAmigos[indiceSorteado];
    sorteadoHTML.innerHTML = sorteado;
}