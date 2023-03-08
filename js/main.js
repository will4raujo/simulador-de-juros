const tipoJuros = document.getElementById('tipo-juros');
const opcoesTaxas = document.getElementById('opcoes-taxas');

let resultadoCapital = document.getElementById('resultado-capital');
let resultadoMulta = document.getElementById('resultado-multa');
let resultadoJuros = document.getElementById('resultado-juros');

const btnCalcular = document.getElementById('btn-calcular');
const btnLimpar = document.getElementById('btn-limpar');

const resultado = document.querySelectorAll('[data-resultado]');

btnCalcular.addEventListener('click', () => {
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
    
    let resultadoTotal = document.getElementById('resultado-total');
    let valorResultadoTotal = (resultadoCapital + resultadoJuros + resultadoMulta).toFixed(2);
    resultadoTotal.innerHTML = `R$ ${ valorResultadoTotal }`
});