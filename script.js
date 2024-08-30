const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Compreenda seu gosto por filmes de animação",
        alternativas: [
            {
                texto: "Vamos lá!",
                afirmacao: ""
            },         
        ]
    },
    {
        enunciado: "Quando escolhe um filme de animação, qual é o teu critério principal?",
        alternativas: [
            {
                texto: "Revejo os clássicos, havendo aquele sentimento de criança novamente",
                afirmacao: "Você tem uma conexão emocional com os filmes de animação e as histórias que te relembra a infância."
            },
            {
                texto:  "Vejo mais arte, as novas tecnicas de animação e se tem mais coisas inovadoras",
                afirmacao: "Sua curiosidade pelo novo e pelo visualmente impressionante mostra que procuras animações que desafiem o convencional e te ofereçam algo fresco e criativo."
            }    
           
        ]
    },
    {
       
            enunciado: "Qual é a tua opinião sobre finais previsíveis em filmes de animação?",
            alternativas: [
                {
                    texto: "Adoro um final feliz, mesmo que seja previsível. Faz parte da magia!",
                    afirmacao: "Teu gosto por finais felizes e previsíveis revela uma preferência pelo conforto das tradições e pelas mensagens positivas e claras."
                },
                {
                    texto:  "Prefiro finais que me surpreendam ou que desafiem as expectativas.",
                    afirmacao: "tua inclinação por finais inesperados ou desafiadores mostra uma mente aberta a novas possibilidades e uma busca por narrativas menos convencionais."
                }    
               
            ]
        },
        {
            enunciado: "O que mais te emociona ao assistir um filme de animação?",

            alternativas: [
                {
                    texto: "A maneira como a história me toca e me lembra dos bons tempos.",
                    afirmacao: "A tua conexão com a narrativa e as emoções que ela evoca revela um gosto pelo tradicional e pelo emocionalmente reconfortante."
                },
                {
                    texto:    "Os detalhes visuais e a maneira como a animação pode contar uma história de forma única.",
                    afirmacao: "A tua paixão pelos detalhes visuais e pelas formas inovadoras de contar histórias indica uma apreciação pela estética e pela inovação."
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