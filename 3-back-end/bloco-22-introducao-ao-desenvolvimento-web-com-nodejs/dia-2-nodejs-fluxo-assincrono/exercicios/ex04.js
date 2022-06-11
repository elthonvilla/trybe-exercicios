// 4. Utilize o arquivo simpsons.json para realizar os requisitos abaixo.
//     Você pode utilizar then/catch ou async/await para escrever seu código. Procure não utilizar callbacks.
//     4.1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const fs = require('fs/promises');
const simpsonsFile = 'simpsons.json';

fs.readFile(simpsonsFile, 'utf8')
  .then((data) => {
    const simpsonsList = JSON.parse(data); 
    simpsonsList.map(simp => console.log(`${simp.id} - ${simp.name}`));
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${simpsonsFile}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });

//     4.2 - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
//     4.3 - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
//     4.4 - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
//     4.5 - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
//     4.6 - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
