const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const refrescar = document.querySelector(".refresh")
const caixaprincipal = []

const perguntas = [
    {
        enunciado: "E aí, já conhece seu gosto para animes?",
        alternativas: [
            {
                texto: "Sim, eu já sei",
                afirmacao: ""
            },
            {
                texto:  "Não, Caí de paraquedas",
                afirmacao: ""
            }    
           
        ]
    },
    {
        enunciado: "Entre esses dois gêneros de anime, qual você prefere?",
        alternativas: [
            {
                texto: "Shounen (ex: “Naruto”, “Dragon Ball”)",
                afirmacao: "Você gosta de histórias de ação e aventura com protagonistas jovens e corajosos."
            },
            {
                texto:  "Isekai (ex: “Sword Art Online”, “Re:Zero”)",
                afirmacao: "Você aprecia tramas onde há mundos paralelos, cheios de fantasia e desafios."
            }    
           
        ]
    },
    {
       
            enunciado: "Qual é o seu tipo de protagonista favorito?",
            alternativas: [
                {
                    texto: "determinados e corajosos",
                    afirmacao: "Você valoriza personagens que enfrentam desafios com coragem e determinação."
                },
                {
                    texto:  "Que se adaptam e dominam",
                    afirmacao: "As histórias e a adaptação do personagem dentro da trama é o que prende a sua atenção"
                }    
               
            ]
        },
        {
            enunciado: "Qual é o seu cenário de anime favorito?",

            alternativas: [
                {
                    texto: "fantasia com batalhas épicas",
                    afirmacao: "Você gosta de histórias intensas e emocionantes."
                },
                {
                    texto:    "Universos paralelos com elementos mágicos",
                    afirmacao: "você tende a apreciar a criatividade e a inovação nos cenários e nas tramas."
                }    
               
            ]
        },
]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();