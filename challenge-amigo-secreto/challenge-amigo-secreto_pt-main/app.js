let participantes = [];
let listaOriginal = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    participantes.push(nome);
    listaOriginal.push(nome);
    nomeInput.value = "";

    atualizarListaParticipantes();
}

function atualizarListaParticipantes() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    participantes.forEach((participante) => {
        const item = document.createElement('li');
        item.textContent = participante;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos 2 participantes para realizar o sorteio.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * participantes.length);
    const amigoSorteado = participantes[indiceSorteado];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="sorteado">O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    participantes = [];
    atualizarListaParticipantes();
}

function reiniciarSorteio() {
    participantes = [...listaOriginal];
    atualizarListaParticipantes();

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    alert ('Sorteio reiniciado!');
}