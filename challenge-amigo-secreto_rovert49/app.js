let listaAmigos = [];

function agregarAmigo() {
    let amigoNuevo = document.getElementById('amigo').value.trim();

    if (amigoNuevo !== "") {
        listaAmigos.push(amigoNuevo);
        actualizarLista();
        document.getElementById('amigo').value = "";
    } else {
        alert("Escribe un nombre válido.");
    }
}

function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = "";

    listaAmigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaHTML.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let amigoElegido = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById('resultado').innerHTML = `<li>${amigoElegido}</li>`;
}
