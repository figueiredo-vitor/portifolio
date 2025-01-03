/*
    Objetivo 1 - quando  o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondido no html

    passo1 - pegar o botao mostrar mais no JS para poder verificar quando o usuário clicar em cima dele

    passo2 - identificar o clique no botão

    passo3 - adicionar a classe " ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão mostrar mais

    Passo1 - pegar o botão e esconder ele
*/

// Objetivo 1 - quando  o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondido no html

// passo1 - pegar o botao mostrar mais no JS para poder verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.project:not(.ativo)');



botaoMostrarProjetos.addEventListener('click', () => {
    //passo3 - adicionar a classe " ativo" nos projetos escondidos
    mostrarMaisProjetos();

    //Objetivo 2 - esconder o botão mostrar mais
    //Passo1 - pegar o botão e esconder ele

    esconderBotao();

});


function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('active');
    });
}
