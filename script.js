document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.getElementById('darkModeButton');
    const body = document.body;
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav ul li a');

    let isDarkModeOn = false; // Definindo o estado inicial do modo escuro

    // Adicionando um evento de clique ao botão de modo escuro
    darkModeButton.addEventListener('click', () => {
        isDarkModeOn = !isDarkModeOn; // Alternando o estado do modo escuro
        
        // Verificando se o modo escuro está ativado
        if (isDarkModeOn) {
            // Ativando o modo escuro
            darkModeButton.textContent = 'Dark Mode: On';
            body.classList.add('dark-mode');
            header.classList.add('dark-mode-header');
            navLinks.forEach(link => link.classList.add('dark-mode-link'));
        } else {
            // Desativando o modo escuro
            darkModeButton.textContent = 'Dark Mode: Off';
            body.classList.remove('dark-mode');
            header.classList.remove('dark-mode-header');
            navLinks.forEach(link => link.classList.remove('dark-mode-link'));
        }
    });

    showCurrentCard(); // Exibindo o card inicial
});

let currentCardIndex = 0; // Índice do card atual
const cards = document.querySelectorAll('.content'); // Selecionando todos os cards

// Função para exibir o card atual
function showCurrentCard() {
    cards.forEach((card, index) => {
        card.classList.toggle('show', index === currentCardIndex);
    });
}

// Função para alterar o índice do card
function changeCardIndex(change) {
    currentCardIndex = (currentCardIndex + change + cards.length) % cards.length;
    showCurrentCard();
}

// Funções para avançar e retroceder entre os cards
function nextCard() {
    changeCardIndex(1);
}

function previousCard() {
    changeCardIndex(-1);
}

// Quando o conteúdo do DOM é carregado...
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona os formulários de cadastro e feedback
    const formCadastro = document.querySelector('.cadastro form');
    const formFeedback = document.querySelector('.feedback form');

    // Adiciona um evento de submissão para o formulário de cadastro
    formCadastro.addEventListener('submit', function(event) {
        // Impede o comportamento padrão do formulário (recarregar a página)
        event.preventDefault(); 

        // Obtém os valores dos campos de nome e email
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        // Verifica se algum dos campos está vazio
        if (nome === '' || email === '') {
            // Se algum campo estiver vazio, exibe mensagem de erro
            mostrarMensagemErro('.cadastro', 'Preencha todos os campos!');
        } else {
            // Se ambos os campos estiverem preenchidos, exibe mensagem de sucesso
            mostrarMensagemSucesso('.cadastro');
        }
    });

    // Adiciona um evento de submissão para o formulário de feedback
    formFeedback.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtém o valor do campo de opinião
        const opiniao = document.getElementById('opiniao').value;

        // Verifica se o campo de opinião está vazio
        if (opiniao === '') {
            // Se estiver vazio, exibe mensagem de erro
            mostrarMensagemErro('.feedback', 'Preencha o campo de opinião!');
        } else {
            // Se o campo estiver preenchido, exibe mensagem de sucesso
            mostrarMensagemSucesso('.feedback');
        }
    });

    // Função para exibir mensagem de sucesso no formulário
    function mostrarMensagemSucesso(formClass) {
        const formSection = document.querySelector(formClass);
        const mensagem = document.createElement('p');
        mensagem.textContent = 'Formulário enviado com sucesso!';
        mensagem.classList.add('sucesso');

        // Adiciona a mensagem à seção do formulário
        formSection.appendChild(mensagem);

        // Remove a mensagem após 3 segundos (3000 milissegundos)
        setTimeout(function() {
            mensagem.remove();
        }, 3000);
    }

    // Função para exibir mensagem de erro no formulário
    function mostrarMensagemErro(formClass, message) {
        const formSection = document.querySelector(formClass);
        const mensagem = document.createElement('p');
        mensagem.textContent = message;
        mensagem.classList.add('erro');

        // Adiciona a mensagem à seção do formulário
        formSection.appendChild(mensagem);

        // Remove a mensagem após 3 segundos (3000 milissegundos)
        setTimeout(function() {
            mensagem.remove();
        }, 3000);
    }
});