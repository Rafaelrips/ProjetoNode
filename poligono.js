const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularArea(vertices) {
  const n = vertices.length;
  let soma1 = 0;
  let soma2 = 0;

  for (let i = 0; i < n - 1; i++) {
    soma1 += vertices[i][0] * vertices[i + 1][1];
    soma2 += vertices[i][1] * vertices[i + 1][0];
  }

  soma1 += vertices[n - 1][0] * vertices[0][1];
  soma2 += vertices[n - 1][1] * vertices[0][0];

  const area = Math.abs((soma1 - soma2) / 2);
  return area;
}

rl.question('Digite o número de vértices do polígono: ', (numVertices) => {
  numVertices = parseInt(numVertices);

  if (isNaN(numVertices) || numVertices < 3) {
    console.log('Por favor, forneça um número válido de vértices maior ou igual a 3.');
    rl.close();
    return;
  }

  let vertices = [];

  for (let i = 1; i <= numVertices; i++) {
    rl.question(`Digite as coordenadas (x y) do vértice ${i}: `, (coordenadas) => {
      const [x, y] = coordenadas.split(' ').map(parseFloat);

      if (isNaN(x) || isNaN(y)) {
        console.log('Por favor, forneça coordenadas válidas.');
        rl.close();
        return;
      }

      vertices.push([x, y]);

      if (i === numVertices) {
        const area = calcularArea(vertices);
        console.log(`A área do polígono é: ${area}`);
        rl.close();
      }
    });
  }
});
