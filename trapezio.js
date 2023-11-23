const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a base maior do trapézio: ', (baseMaior) => {
  rl.question('Digite a base menor do trapézio: ', (baseMenor) => {
    rl.question('Digite a altura do trapézio: ', (altura) => {
      baseMaior = parseFloat(baseMaior);
      baseMenor = parseFloat(baseMenor);
      altura = parseFloat(altura);

      if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) {
        console.log('Por favor, forneça valores numéricos válidos.');
      } else {
        const area = ((baseMaior + baseMenor) * altura) / 2;
        console.log(`A área do trapézio é: ${area}`);
      }

      rl.close();
    });
  });
});
