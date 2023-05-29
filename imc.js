// criação das variaveis
const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    // verificacao se o campo está preenchido.
    if (nome !== '' && altura !== '' && peso !== '') {
        // formula do IMC
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';
        // classificando o percentual de IMC
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }
        // preenchimento dos valores
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        // se não preencher os campos será alertado
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);