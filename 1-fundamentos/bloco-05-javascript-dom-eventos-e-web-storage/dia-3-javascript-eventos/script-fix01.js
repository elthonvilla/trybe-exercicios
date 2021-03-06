const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// R: A margem está com definicoes diferentes

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
function addTech (event) {
  firstLi.className ='';
  secondLi.className = '';
  thirdLi.className = '';
  event.target.className = 'tech';
  };
  firstLi.addEventListener('click', addTech);
  secondLi.addEventListener('click', addTech);
  thirdLi.addEventListener('click', addTech);

// function addTechFirst () {
//   firstLi.className ='tech';
//   secondLi.className = '';
//   thirdLi.className = '';
//   }
//   firstLi.addEventListener('click', addTechFirst);

// function addTechSec () {
//   secondLi.className = 'tech';
//   firstLi.className = '';
//   thirdLi.className = '';
// }
// secondLi.addEventListener('click', addTechSec);

// function addTechThird () {
//   thirdLi.className = 'tech';
//   secondLi.className = '';
//   firstLi.className ='';
// }
// thirdLi.addEventListener('click', addTechThird);

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
// Implementa uma função que remove a classe dos outros ao adicionar no selecionado.
// feito!

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keyup', function() {
  let techElement = document.querySelector('.tech');

  techElement.innerText = 'Texto alterado';
})
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
// comando 'window.open' consultado no site https://pt.stackoverflow.com/questions/39620/como-for%C3%A7ar-a-abertura-de-um-link-em-outra-aba-e-n%C3%A3o-janela
myWebpage.addEventListener('click', function() {
  window.open("https://www.betrybe.com","_blank");
} );

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', function(event){
  event.target.style.color = 'green';

})
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.