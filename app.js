//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let participante = [];
let numeroParticipantes = 0;

function adicionarAmigo(){
    if(document.querySelector('input').value){
        participante.push(document.querySelector('input').value);
        mostrarParticipantes('ul', participante[numeroParticipantes]);
        numeroParticipantes++;
        document.querySelector('input').value = '';  //Apaga o campo de nomes
    }else{
        alert('Por favor, insira um nome válido!')
    }
    console.log(participante);
}

function mostrarParticipantes(tag, texto){
    let listaAmigo = document.querySelector(tag);
    let li = document.createElement('li');
    li.textContent = texto;
    listaAmigo.appendChild(li);
}

function sortearAmigo(){
    document.querySelector('ul').innerHTML = '';
    let meuAmigo = document.querySelector('#resultado');
    meuAmigo.innerHTML = 'O amigo secreto sorteado é: ' + participante[parseInt(Math.random() * numeroParticipantes)]
}
