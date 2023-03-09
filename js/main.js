let resultadoCapital = '';
let resultadoJuros = '';
let resultadoMulta = '';
let resultadoTotal = '';
let valorResultadoTotal = '';

const btnCalcular = document.getElementById('btn-calcular');

btnCalcular.addEventListener('click', () => {

    const tipoJuros = document.getElementById('tipo-juros');
    const opcoesTaxas = document.getElementById('opcoes-taxas');

    resultadoCapital = document.getElementById('resultado-capital');
    resultadoMulta = document.getElementById('resultado-multa');
    resultadoJuros = document.getElementById('resultado-juros');

    let inpCapital = parseFloat(document.getElementById('capital').value);
    resultadoCapital.innerHTML = `R$ ${(inpCapital).toFixed(2)}`;

    let inpMulta = parseFloat(document.getElementById('multa').value)
    resultadoMulta.innerHTML = `R$ ${(inpMulta).toFixed(2)}`

    let inpJuros = parseFloat(document.getElementById('taxajuros').value);
    let inpPrazo = parseFloat(document.getElementById('prazo').value);
    let inpCarencia = parseFloat(document.getElementById('carencia').value);
    
    let multiplicacaoCapitalXJuros = inpCapital * (inpJuros/100);
    let prazoMenosCarencia = (inpPrazo - inpCarencia);
    
    if ( tipoJuros.value === 'simples' ) {
        if ( opcoesTaxas.value === 'ad') {
            resultadoJuros.innerHTML = `R$ ${ ( multiplicacaoCapitalXJuros * prazoMenosCarencia ).toFixed(2) }`;
            
        } else if ( opcoesTaxas.value === 'am' ) { 
            resultadoJuros.innerHTML = `R$ ${ ( (multiplicacaoCapitalXJuros /30 ) * prazoMenosCarencia ).toFixed(2) }`;
       
        } else if ( opcoesTaxas.value === 'aa') {
            resultadoJuros.innerHTML = `R$ ${ (( multiplicacaoCapitalXJuros /360 ) * prazoMenosCarencia ).toFixed(2) }`;
        }
    } else if (tipoJuros.value === 'composto'){
        if (opcoesTaxas.value === 'ad') {
            resultadoJuros.innerHTML = `R$ ${ (( 1 + (multiplicacaoCapitalXJuros)) * prazoMenosCarencia).toFixed(2) }`;
        } else if ( opcoesTaxas.value === 'am') {
            resultadoJuros.innerHTML = `R$ ${ (( 1 + (multiplicacaoCapitalXJuros / 30 )) * prazoMenosCarencia).toFixed(2)}`;
        } else if ( opcoesTaxas.value === 'aa' ) { 
            resultadoJuros.innerHTML = `R$ ${ (( 1 + (multiplicacaoCapitalXJuros / 360 )) * prazoMenosCarencia).toFixed(2)}`;
        }
    }
    
    resultadoCapital = (parseFloat(resultadoCapital.textContent.slice(3)));
    resultadoJuros = (parseFloat(resultadoJuros.textContent.slice(3)));
    resultadoMulta = (parseFloat(resultadoMulta.textContent.slice(3)));
    
    resultadoTotal = document.getElementById('resultado-total');
    valorResultadoTotal = (resultadoCapital + resultadoJuros + resultadoMulta).toFixed(2);
    resultadoTotal.innerHTML = `R$ ${ valorResultadoTotal }`;
});

const btnLimpar = document.getElementById('btn-limpar');

btnLimpar.addEventListener('click', () => {

    resetarResultado = document.querySelectorAll('[data-resultado]');
    resetarResultado.forEach(element => {
        element.innerHTML = 'R$ 0,00'
    });

    resetarInputs = document.querySelectorAll('[data-input]');
    resetarInputs.forEach(element => {
        element.value = '0'
    })
})