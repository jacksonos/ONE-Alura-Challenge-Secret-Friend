// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const amigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultadoSorteo = document.getElementById('resultado');

const agregarAmigo = () => {
  if (amigo.value != '') {
    amigos.push(amigo.value);
    limpiarCampo();
    mostrarLista();
  } else {
    alert('Por favor, inserte un nombre');
  }
};

const mostrarLista = () => {
  listaAmigos.innerHTML = '';
  amigos.forEach(element => {
    const nombreAmigo = document.createElement('li');
    nombreAmigo.textContent = element;
    listaAmigos.appendChild(nombreAmigo);
  });
}

const limpiarCampo = () => {
  amigo.value = '';
}

const sortearAmigo = () => {
  if (amigos.length != 0) {
    resultadoSorteo.innerHTML = `La persona amiga sorteada es: ${amigos[Math.floor(Math.random() * amigos.length)]}`
  }
}

