const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o raio da base do cilindro: ', (raio) => {
  rl.question('Digite a altura do cilindro: ', (altura) => {
    raio = parseFloat(raio);
    altura = parseFloat(altura);

    if (isNaN(raio) || isNaN(altura) || raio <= 0 || altura <= 0) {
      console.log('Por favor, forneça valores numéricos válidos e positivos.');
    } else {
      const areaSuperficie = 2 * Math.PI * Math.pow(raio, 2) + 2 * Math.PI * raio * altura;
      console.log(`A área da superfície do cilindro é: ${areaSuperficie}`);
    }

    rl.close();
  });
});
