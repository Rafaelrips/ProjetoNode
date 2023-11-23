const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número de lados do polígono regular: ', (numLados) => {
  rl.question('Digite o comprimento do lado do polígono regular: ', (comprimentoLado) => {
    numLados = parseFloat(numLados);
    comprimentoLado = parseFloat(comprimentoLado);

    if (isNaN(numLados) || isNaN(comprimentoLado) || numLados < 3) {
      console.log('Por favor, forneça valores numéricos válidos e um número de lados maior ou igual a 3.');
    } else {
      const area = (numLados * Math.pow(comprimentoLado, 2)) / (4 * Math.tan(Math.PI / numLados));
      console.log(`A área do polígono regular é: ${area}`);
    }

    rl.close();
  });
});
