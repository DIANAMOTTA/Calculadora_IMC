// Obtém referências aos elementos HTML usando seus IDs como criado, nome, peso etc..
// Essas variáveis vão armazenar os elementos para podermos trabalhar com eles depois
const calcular = document.getElementById('calcular'); // Botão de calcular


function imc () {
    const nome = document.getElementById('nome').value;        // Campo de entrada para o nome
    const altura = document.getElementById('altura').value;    // Campo de entrada para a altura
    const peso = document.getElementById('peso').value;        // Campo de entrada para o peso
    const resultado = document.getElementById('resultado'); // Elemento onde será exibido o resultado

    // Verifica se os campos estão preenchidos
    if (nome !== '' && altura !== '' && peso !== '') { 

        // Calcula o IMC usando a fórmula: peso / (altura * altura)
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';
        // Verifica o valor do IMC e define a classificação correspondente
        
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
            resultado.className = 'result-cuidado'; // Amarelo/alerta
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
            resultado.className = 'result-normal'; // Verde/sucesso
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
            resultado.className = 'result-cuidado'; // Amarelo/alerta
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
            resultado.className = 'result-perigo'; // Vermelho/perigo
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.';
            resultado.className = 'result-perigo'; // Vermelho/perigo
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!';
            resultado.className = 'result-perigo'; // Vermelho/perigo
        }
        
        // Exibe o resultado no elemento resultado
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else{
    resultado.textContent = 'Preencha todos os campos';
    }


}
// Adiciona um "ouvinte" de evento ao botão calcular
// Quando o botão for clicado, a função imc() será executada
calcular.addEventListener('click', imc);
