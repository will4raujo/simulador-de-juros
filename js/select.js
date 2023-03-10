const selecionaValue = document.querySelectorAll('[data-input]');

function selecionaConteudo(event) {
    event.target.select();
}

selecionaValue.forEach(input => {
    input.addEventListener('click', selecionaConteudo)
})
