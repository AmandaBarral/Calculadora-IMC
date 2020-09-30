const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value.replace(',','.');
    const peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorImc = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';
        if (valorImc < 18.5) {
            classificacao = 'abaixo do peso.';
        }else if (valorImc < 25) {
            classificacao = 'com peso ideal.';
        }else if (valorImc < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorImc < 35) {
            classificacao = 'com obesidade grau 1. Atenção!';
        }else if (valorImc < 40) {
            classificacao = 'com obesidade grau 2. Atenção!';
        }else {
            classificacao = 'com obesidade grau 3. Atenção!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`;
    } else {
        alert('Preencha todos os campos')
    }
}

calcular.addEventListener('click', imc);