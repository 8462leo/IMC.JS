// Captura os elementos do HTML
const alturaInput = document.getElementById('altura');
const pesoInput = document.getElementById('peso');
const botaoCalcula = document.getElementById('confirmação');
const respostaParagrafo = document.getElementById('resposta');

botaoCalcula.addEventListener('click', function() {
    const altura = parseFloat(alturaInput.value.replace(',', '.')); // Converte a vírgula para ponto antes do cálculo
    const peso = parseFloat(pesoInput.value.replace(',', '.')); // Converte a vírgula para ponto antes do cálculo

    // Limpa todas as classes de estilo antes de adicionar a nova
    respostaParagrafo.className = '';

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        respostaParagrafo.textContent = 'Por favor, digite valores válidos para altura e peso.';
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';
    let classeCSS = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        classeCSS = 'abaixo-peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
        classeCSS = 'peso-normal';
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
        classeCSS = 'sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = 'Obesidade grau 1';
        classeCSS = 'obesidade-1';
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = 'Obesidade grau 2';
        classeCSS = 'obesidade-2';
    } else {
        classificacao = 'Obesidade grau 3 (mórbida)';
        classeCSS = 'obesidade-3';
    }

    // Formata o IMC para 2 casas decimais e converte o ponto para vírgula
    const imcFormatado = imc.toFixed(2).replace('.', ',');

    // Adiciona a classe CSS correspondente ao parágrafo
    respostaParagrafo.classList.add(classeCSS);

    // Atualiza o texto da resposta
    respostaParagrafo.textContent = `Seu IMC é de ${imcFormatado}. Classificação: ${classificacao}.`;
});