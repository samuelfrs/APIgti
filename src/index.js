const Fastify = require("fastify");
const port = process.env.PORT || 3000;

const fastify = Fastify({
    logger: false, //exibir no terminal o que tá sendo executado
})

//fastify.register(require("@fastify/mysql"), {
//    connectionString: "mysql://usuario:senha@localhost"
//})

const perguntas = [
  {
    id: 1,
    title: "Que valor da GTi se relaciona com a crença de que não há limites para o sucesso?",
    answer: [
      "O céu não é o limite",
      "Ohana",
      "Capitão da nave",
      "Movidos pelo resultado"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 2,
    title: "Qual valor da GTi reflete a dedicação à missão da empresa?",
    answer: [
      "Apaixonados pela missão",
      "Integridade",
      "Ohana",
      "Movidos pelo resultado"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 3,
    title: "Qual valor da GTi está relacionado à ideia de que todos são uma família unida?",
    answer: [
      "Capitão da nave",
      "O céu não é o limite",
      "Ohana",
      "Apaixonados pela missão"
    ],
    correctAnswerIndex: 2
  },
  {
    id: 4,
    title: "Qual valor da GTi se concentra na importância da honestidade e ética?",
    answer: [
      "Movidos pelo resultado",
      "Ohana",
      "Capitão da nave",
      "Integridade"
    ],
    correctAnswerIndex: 3
  },
  {
    id: 5,
    title: "Que valor da GTi representa a busca constante por resultados positivos?",
    answer: [
      "O céu não é o limite",
      "Integridade",
      "Integridade",
      "Movidos pelo resultado"
    ],
    correctAnswerIndex: 3
  },
  {
    id: 6,
    title: "Qual palavra-chave é usada para declarar uma variável constante em JavaScript?",
    answer: [
      "var",
      "int",
      "let",
      "const"
    ],
    correctAnswerIndex: 3
  },
  {
    id: 7,
    title: "Qual operador é usado para verificar a igualdade em valor e tipo em JavaScript?",
    answer: [
      "==",
      "===",
      "=",
      "!="
    ],
    correctAnswerIndex: 1
  },
  {
    id: 8,
    title: "Qual estrutura de controle é usada para executar um bloco de código várias vezes em JavaScript?",
    answer: [
      "if",
      "for",
      "function",
      "node"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 9,
    title: "Como você declara uma função em JavaScript?",
    answer: [
      "function minhaFuncao() {}",
      "def minhaFuncao() {}",
      "var minhaFuncao = function() {}",
      "fun minhaFuncao() {}"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 10,
    title: "Qual é a maneira correta de selecionar um elemento HTML por sua classe em JavaScript?",
    answer: [
      "getElementById('minhaClasse')",
      "querySelector('.minhaClasse')",
      "selectElement('.minhaClasse')",
      "getElementByClass('minhaClasse')"
    ],
    correctAnswerIndex: 3
  },
  {
    id: 11,
    title: "Qual é a função do operador de atribuição '==' em JavaScript?",
    answer: [
      "Comparar dois valores e retornar true se forem iguais.",
      "Atribuir um valor a uma variável.",
      "Comparar dois valores independentemente do tipo.",
      "Verificar se uma variável foi declarada."
    ],
    correctAnswerIndex: 2
  },
  {
    id: 12,
    title: "Qual função é usada para transformar uma string em minúsculas em JavaScript?",
    answer: [
      "toLowerCase()",
      "convertToLower()",
      "lowerCase()",
      "stringToLower()"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 13,
    title: "Como você verifica se uma variável é do tipo 'string' em JavaScript?",
    answer: [
      "typeof variavel === 'str'",
      "variavel instanceof String",
      "typeof variavel === 'string'",
      "variavel.type() === 'string'"
    ],
    correctAnswerIndex: 2
  },
  {
    id: 14,
    title: " Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
    answer: [
      "Não há diferença, ambos significam a mesma coisa.",
      "'null' é usado para números e 'undefined' é usado para strings.",
      "'undefined' é uma palavra-chave reservada, enquanto 'null' é um tipo de objeto.",
      "'null' representa a ausência de um valor, enquanto 'undefined' indica que uma variável foi declarada, mas ainda não foi atribuída com um valor."
    ],
    correctAnswerIndex: 3
  },
  {
    id: 15,
    title: "Qual é o operador lógico que representa 'OU' em JavaScript?",
    answer: [
      "&&",
      "||",
      "!",
      "or"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 16,
    title: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis em JavaScript?",
    answer: [
      "'let' declara uma variável com escopo de função, enquanto 'const' declara uma variável com escopo global.",
      "'let' permite a reatribuição de valor, enquanto 'const' cria uma variável imutável.",
      "const' é usada para variáveis numéricas, enquanto 'let' é usada para strings.",
      "Não há diferença, ambos são usados para declarar variáveis."
    ],
    correctAnswerIndex: 1
  },
  {
    id: 17,
    title: "Qual operador lógico é usado para verificar se duas condições são verdadeiras em JavaScript?",
    answer: [
      "&&",
      "||",
      "!",
      "?"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 18,
    title: "Qual método é usado para adicionar um elemento ao final de uma matriz (array) em JavaScript?",
    answer: [
      "shift()",
      "pop()",
      "push()",
      "splice()"
    ],
    correctAnswerIndex: 2
  },
  {
    id: 19,
    title: "Qual declaração é usada para criar uma estrutura condicional em JavaScript?",
    answer: [
      "for",
      "if",
      "while",
      "switch"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 20,
    title: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
    answer: [
      "parseFloat()",
      "toNumber()",
      "parseInt()",
      "stringToInt()"
    ],
    correctAnswerIndex: 2
  }
  ]

function quantidadeAleatoriaEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  }

function embaralhar(array) {
  const embaralhado = [...array];
  var i = embaralhado.length, j, temp;
  while(--i > 0){
    j = Math.floor(Math.random()*(i+1));
    temp = embaralhado[j];
    embaralhado[j] = embaralhado[i];
    embaralhado[i] = temp;
  }
  return embaralhado;
}


fastify.get("/", function (request, reply){
    reply.send(embaralhar(perguntas).slice(0, quantidadeAleatoriaEntre(4, 6)));
});

fastify.listen(port, function(error, address) {
   if(error) {
    console.log(error)
    process.exit(1)
   }
   console.log("Servidor rodando", address)
})