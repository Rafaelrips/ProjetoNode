const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o comprimento do lado da base do prisma: ', (comprimentoLado) => {
  rl.question('Digite a altura da base do prisma: ', (alturaBase) => {
    rl.question('Digite o número de lados da base do prisma: ', (numLadosBase) => {
      rl.question('Digite a altura do prisma: ', (alturaPrisma) => {
        comprimentoLado = parseFloat(comprimentoLado);
        alturaBase = parseFloat(alturaBase);
        numLadosBase = parseFloat(numLadosBase);
        alturaPrisma = parseFloat(alturaPrisma);

        if (isNaN(comprimentoLado) || isNaN(alturaBase) || isNaN(numLadosBase) || isNaN(alturaPrisma) || numLadosBase < 3) {
          console.log('Por favor, forneça valores numéricos válidos e um número de lados da base maior ou igual a 3.');
        } else {
          const areaBase = (numLadosBase * Math.pow(comprimentoLado, 2)) / (4 * Math.tan(Math.PI / numLadosBase));
          const perimetroBase = numLadosBase * comprimentoLado;
          const areaTotal = 2 * areaBase + perimetroBase * alturaPrisma;

          console.log(`A área total do prisma é: ${areaTotal}`);
        }

        rl.close();
      });
    });
  });
});
