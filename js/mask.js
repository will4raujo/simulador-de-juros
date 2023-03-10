const formataValue = document.querySelectorAll('[data-moeda]');

function moeda(z) {
    v = z.value;
    v=v.replace(/\D/g,"") // permite digitar apenas numeros
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2") // coloca virgula antes dos ultimos 2 digitos
    z.value = v;
}

formataValue.forEach(e => {
    e.addEventListener('keyup', () => moeda(e))
});
