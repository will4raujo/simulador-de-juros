function limpar(){

}

function selecionacapital(){
    document.getElementById("capital").select(); //seleciona todo o value do input
}
function selecionataxa(){
    document.getElementById("taxajuros").select();
}
function selecionaprazo(){
    document.getElementById("prazo").select();
}
function selecionamulta(){
    document.getElementById("multa").select();
}
function selecionacarencia(){
    document.getElementById("carencia").select();
}

var taxajuros = parseFloat((document.getElementById('taxajuros')).value);
//var prazo = parseFloat((document.getElementById('prazo')).value);
var carencia = parseFloat((document.getElementById('carencia')).value);

function inserircapital(c) {
    return capital.value;
}

function inserirmulta(m){
    if(multa.value === ""){
        return 0;
    }else return parseFloat(multa.value);
}

function resultado() {
    //valores diretos
    var capital = parseFloat((document.getElementById("capital")).value);
    console.log(capital);
    
    document.querySelector('#divcapital').innerHTML = parseFloat(inserircapital(capital.value));
    console.log(parseFloat(inserircapital(capital.value)));

    var multa = parseFloat((document.getElementById("multa")).value);
    console.log(parseFloat((document.getElementById("multa")).value));

    document.querySelector('#divmulta').innerHTML = inserirmulta(multa.value);
    console.log(parseFloat(inserirmulta(multa)));

    inserirjuros(capital, prazo, taxajuros, multa);
    calcularresultado(capital, prazo, taxajuros, multa);
    
}
    //valores que precisam ser calculados

    function inserirjuros(capital, prazo, taxajuros, multa){
        var capital = parseFloat((document.getElementById("capital")).value);
        var prazo = parseFloat((document.getElementById("prazo")).value);
        var taxajuros = parseFloat((document.getElementById("taxajuros")).value);
        var multa = parseFloat((document.getElementById("multa")).value);
        var carencia = parseFloat((document.getElementById("carencia")).value);
        console.log(multa);

        var formajuros = document.getElementById("formajurosid");
        var fjuros = parseFloat(formajuros.value);

        var tipojuros = document.getElementById("tipojurosid");
        var tjuros = parseFloat(tipojuros.value);
        
        var tipotaxajuros;
        var montante;

        if(fjuros === 0){
        
            if(tjuros === 3){
                //var resultadotaxajurosad = parseFloat;
                tipotaxajuros = (capital * (taxajuros/100));
                console.log(tipotaxajuros);
                document.querySelector('#divjuros').innerHTML = tipotaxajuros.toFixed(2);
                console.log(document.querySelector('#divjuros').innerHTML = tipotaxajuros);
            }else if(tjuros === 4){
                //var resultadotaxajurosam = parseFloat;
                tipotaxajuros = (capital * ((taxajuros/100) /30 ));
                console.log(tipotaxajuros);
                document.querySelector('#divjuros').innerHTML = tipotaxajuros.toFixed(2);
                console.log(document.querySelector('#divjuros').innerHTML = tipotaxajuros);
            }else if(tjuros === 5){
                //var resultadotaxajurosaa = parseFloat;
                tipotaxajuros = (capital * ((taxajuros/100) /360 ));
                console.log(tipotaxajuros);
                document.querySelector('#divjuros').innerHTML = tipotaxajuros.toFixed(2);
                console.log(document.querySelector('#divjuros').innerHTML = tipotaxajuros);
            }
            return tipotaxajuros
        }else if(fjuros === 1){
            if(tjuros === 3){
                taxajuroscomposto = (1 + (taxajuros/100));
                tipotaxajuros = (taxajuroscomposto ** (prazo - carencia));
                document.querySelector('#divjuros').innerHTML = tipotaxajuros.toFixed(2);

            }else if(tjuros === 4){
                taxajuroscomposto = (1 + ((taxajuros/100) /30 ));
                tipotaxajuros = (taxajuroscomposto ** (prazo - carencia));
                document.querySelector('#divjuros').innerHTML = tipotaxajuros.toFixed(2);
            }else if(tjuros === 5){
                taxajuroscomposto = (1 + ((taxajuros/100) /360 ));
                tipotaxajuros = (taxajuroscomposto ** (prazo - carencia));
                document.querySelector('#divjuros').innerHTML = tipotaxajuros.toFixed(2);
            }
            return tipotaxajuros;
        }
    }

    function calcularresultado(capital, prazo, taxajuros, multa){
        var formajuros = document.getElementById("formajurosid");
        var fjuros = parseFloat(formajuros.value);
        console.log(fjuros);

        var tipojuros = document.getElementById("tipojurosid");
        var tjuros = parseFloat(tipojuros.value);
        console.log(tjuros);

        var capital = parseFloat((document.getElementById("capital")).value);
        var tipotaxajuros = inserirjuros(capital, prazo, taxajuros, multa);
        var prazo = parseFloat((document.getElementById("prazo")).value);
        var multa = parseFloat((document.getElementById("multa")).value);
        var carencia = parseFloat((document.getElementById("carencia")).value);
        var calcularesultado = parseFloat;

        if(fjuros === 0){
            calcularesultado = (capital + ((tipotaxajuros * (prazo - carencia)) + multa));
            console.log(calcularesultado);
            document.querySelector('#divresultado').innerHTML = calcularesultado.toFixed(2);
        }else if(fjuros === 1){
            calcularesultado = ((capital * tipotaxajuros) + multa);
            console.log(tipotaxajuros);
            console.log(calcularesultado);
            document.querySelector('#divresultado').innerHTML = calcularesultado.toFixed(2);
        }

    }
