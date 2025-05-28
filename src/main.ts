// Escreva seu código aqui!
const quantidadeDeJanelas: number = 4;
const professoraDaAula: string = "Lana Mesquita";
let arFuncionando: boolean = true;
let prestandoAtenção;

type Computador = {
    sistemaOperacional: string;
    labo: number;
    bloco: number;
};

let computador: Computador = {
    sistemaOperacional: 'Windows',
    labo: 3,
    bloco: 1,
};

console.log(`Hoje fui para a aula de ${professoraDaAula}, no Bloco ${computador.bloco} - Laboratório ${computador.labo}. Nesse laboratório, temos ${quantidadeDeJanelas} janelas. O computador que estou usando tem o sistema operacional ${computador.sistemaOperacional}. O ar condicionado está funcionando? ${arFuncionando}. Os alunos estão prestando atenção?. ${prestandoAtenção} `);
