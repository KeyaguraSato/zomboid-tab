function addP() {

    let ponits = document.getElementById("ttp")
}



// script.js
document.addEventListener('DOMContentLoaded', () => {
    const scoreElement = document.getElementById('ttp');
    let ttp = 0;

    // Função para atualizar a pontuação
    function updateScore(value) {
        ttp += parseInt(value, 10);
        scoreElement.textContent = ttp;
    }

    // Seleciona todos os botões com a classe 'trc' e adiciona um ouvinte de eventos
    document.querySelectorAll('.trc').forEach(button => {
        button.addEventListener('click', () => {
            // Obtém o valor do 'span' com a classe 'addt'
            const value = button.querySelector('.addt').textContent;
            updateScore(value);
        });
        
    });
    document.querySelectorAll('.trc').forEach(button => {
        button.addEventListener('click', () => {
            // Obtém o valor do 'span' com a classe 'addt'
            const value = button.querySelector('.rmvt').textContent;
            updateScore(value);
        });
        
    });
});
