const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Digite o comprimento do retângulo: ', (comprimento) => {
  
  rl.question('Digite a largura do retângulo: ', (largura) => {
   
    comprimento = parseFloat(comprimento);
    largura = parseFloat(largura);

    
    if (isNaN(comprimento) || isNaN(largura)) {
      console.log('Por favor, forneça valores numéricos válidos.');
    } else {
      
      const area = comprimento * largura;
      
      console.log(`A área do retângulo é: ${area}`);
    }

    rl.close();
  });
});

  
