const Fastify = require("fastify");

const fastify = Fastify({
    logger: false, //exibir no terminal o que tá sendo executado
})

//fastify.register(require("@fastify/mysql"), {
//    connectionString: "mysql://usuario:senha@localhost"
//})

const perguntas = [
  {
    id: 1,
    title: "Primeira pergunta",
    answer: [
      "Primeira resposta",
      "Segunda resposta",
      "Terceira resposta",
      "Quarta resposta"
    ],
    correctAnswerIndex: 2
  },
  {
    id: 2,
    title: "Segunda pergunta",
    answer: [
      "Primeira resposta",
      "Segunda resposta",
      "Terceira resposta",
      "Quarta resposta"
    ],
    correctAnswerIndex: 3
  },
  {
    id: 3,
    title: "Terceira pergunta",
    answer: [
      "Primeira resposta",
      "Segunda resposta",
      "Terceira resposta",
      "Quarta resposta"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 4,
    title: "Quarta pergunta",
    answer: [
      "Primeira resposta",
      "Segunda resposta",
      "Terceira resposta",
      "Quarta resposta"
    ],
    correctAnswerIndex: 2
  },
  {
    id: 5,
    title: "Quinta pergunta",
    answer: [
      "Primeira resposta",
      "Segunda resposta",
      "Terceira resposta",
      "Quarta resposta"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 6,
    title: "Sexta pergunta",
    answer: [
      "Primeira resposta",
      "Segunda resposta",
      "Terceira resposta",
      "Quarta resposta"
    ],
    correctAnswerIndex: 1
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

fastify.listen({ port: 3000 }, function(error, address) {
   if(error) {
    console.log(error)
    process.exit(1)
   }
   console.log("Servidor rodando", address)
})