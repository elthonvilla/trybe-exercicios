// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (array1, array2) => {
  let nota = 0;
  for (i = 0; i < array1.length; i += 1) {
    if (array2[i] === 'N.A') { }
    else if (array1[i] === array2[i]) {
      nota += 1;
    } else {
      nota -= 0.5;
    }
  }
  return nota;
}
//console.log (verifyAnswers(RIGHT_ANSWERS,STUDENT_ANSWERS));

const hofNotaFinal = (arr1, arr2, func) => func(arr1, arr2);

console.log(hofNotaFinal(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers));
