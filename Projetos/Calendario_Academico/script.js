// script.js

// Captura os elementos do formulário
const nota01 = document.getElementById('nota01');
const nota02 = document.getElementById('nota02');
const nota03 = document.getElementById('nota03');
const nota04 = document.getElementById('nota04');
const enviarBotao = document.getElementById('enviar');
const txtMedia = document.getElementById('txtMedia');

// Event listener para o botão "Enviar"
enviarBotao.addEventListener('click', function () {
    const valor01 = parseFloat(nota01.value) || 0;
    const valor02 = parseFloat(nota02.value) || 0;
    const valor03 = parseFloat(nota03.value) || 0;
    const valor04 = parseFloat(nota04.value) || 0;

    // Calcula a média ponderada
    const media = (valor01 * 0.2 + valor02 * 0.3 + valor03 * 0.2 + valor04 * 0.3).toFixed(2);

    // Exibe a média
    txtMedia.value = media;

    // Verifica se o aluno foi aprovado
    if (media >= 6) {
        txtMedia.style.color = 'green';
        txtMedia.value += ' - Aprovado';
    } else {
        txtMedia.style.color = 'red';
        txtMedia.value += ' - Reprovado';
    }
});
