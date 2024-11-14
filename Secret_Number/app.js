let numRange = 100;
let numeroAdivinha = parseInt(Math.random() * numRange + 1);
let count = 0;
let tentativas = count == 1 ? ' tentativa.' : ' tentativas.';

alert('========== Bem-vindo ao jogo do número secreto ==========');

while (1) {
    chute = prompt('Digite um número entre 0 e ' + numRange + ':');
    count++;
    if (chute == numeroAdivinha) {
        break;
    } else if (chute != numeroAdivinha) {
        if (numeroAdivinha > chute) {
            alert('Aqui vai uma dica: o número é MAIOR!');
        } else if (numeroAdivinha < chute) {
            alert('Aqui vai uma dica: o número é MENOR!');
        }
    }
}

alert('Parabéns! Você acertou o número secreto ' + numeroAdivinha + ' em ' + count + tentativas);