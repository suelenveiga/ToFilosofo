const questao = document.getElementById('questao');
const db = firebase.database();
const form = document.getElementById('nickform');
const divChat = document.querySelector('div.chat');

let button = document.getElementById('b1');
let parag = document.getElementsByClassName('parag');

let pergunta = [" Considere as afirmações abaixo: I. O cubo de 0,2 é 0,8. II.   Um quadrado de área 0,36 cm² tem o perímetro igual a 2,4cm.   III. O valor da expressão  ³√0125 + 3 *0,5 é igual a 2.   Então: "," Isadora tem um bambolê, brinquedo no formato de uma circunferência de 1,6 m de raio. Para Isadora, esse tamanho é inadequado: ela quer cortar o bambolê, para que ele fique com 75% do tamanho original. Nessas condições, quanto do comprimento inicial do bambolê deverá ser retirado?","Os alunos do 9° ano da escola “Perseverança” deveriam contribuir com quantias iguais a fim de arrecadar R$ 15.000,00 para as solenidades de formatura. Entretanto, dez deles deixaram de fazê-lo, ocasionando para cada um dos demais um acréscimo de R$ 50,00 nas respectivas contribuições. Contribuíram efetivamente: ",". De acordo com o paralelogramo ABCD,sendo E o ponto de intersecção das diagonais AC e BD, temos as seguintes medidas: AE = 4x, DE = 5x,BE  = 12 + 2y e CE =  15 + 7y . Os valores de x e de y são,respectivamente:","Uma escada é feita pregando tábuas pequenas para os degraus e duas tábuas compridas para as laterais, como mostra a figura 2. Para pregar as tábuas, foram usados os pregos A, B, C, D, E, F, G e H. Sabendo que a distância entre os pregos B e D é de 25 cm, entre D e F é de 35 cm, entre F e H é de 20 cm, entre E e G é de 24 cm e que os dois degraus de cima são paralelos, determine a que distância, em cm, deve estar o prego G do prego A, para que os degraus fiquem paralelos entre si:",". Uma artesã dispõe de uma folha retangular de cartolina com dimensões 20 cm por 25 cm e precisa recortar retângulos com as dimensões 3 cm por 4 cm. O número máximo possível de retângulos com essas dimensões é",". Na primeira hora da tarde, uma pessoa conta um segredo para sua amiga. Na segunda hora da tarde, a amiga conta para mais três amigas.Cada uma dessas três amigas conta o segredo para outras três amigas diferentes, durante a terceira hora da tarde. E assim se sucede até o final da sétima hora da tarde. Quantas pessoas ficaram sabendo do segredo da pessoa inicial até o final da sétima hora da tarde?","Um parque tem 6 brinquedos individuais, mas somente 2/3 da sua capacidade total estão funcionando perfeitamente este mês (considerar o mês de 28 dias). Cada brinquedo individual funciona 5 horas por dia, durante 7 dias na semana, com 2 voltas por hora, e o ingresso é de R$ 3,25 por volta. As despesas com esses brinquedos são de R$ 1.745,00 por mês, contemplando salários dos funcionários, eletricidade, etc. Qual é o lucro exato do proprietário do parque com esses brinquedos neste mês?","Um retângulo que teve 40% de sua largura aumentada e 35% de seu comprimento reduzido apresenta, em relação à área do retângulo inicial,","Uma empresa A cobra R$ 80,00 por um determinado produto, mais uma taxa mensal de R$ 20,00 para manutenção. Uma empresa B cobra R$ 120,00 pelo mesmo produto, mais a taxa mensal de R$ 12,00 para manutenção. A empresa B será mais vantajosa que a A:"];

let resposta = [["a) Somente a afirmação II está correta.","b) Somente as afirmações I e II estão corretas.","c) Somente as afirmações I e III estão corretas.","d) Somente as afirmações II e III estão corretas.","e) Todas as afirmações estão corretas." ],["a) 2,4π m", "b) 1,2π m","c) 0,8 m","d) 1,2 m","e) 0,8π m "],["a) 60 pessoas","b) 55 pessoas","c) 50 pessoas","d) 10 pessoas","e) 65 pessoas "],["a) 8,5 e 10","b) 10 e 8,5","c)  1 e 2","d) 2 e1","e) 10,5 e 8"],["a) 80","b) 60","c) 96","d) 72","e) 84"],["(A) 36","(B) 40","(C) 41","(D) 42","(E) 45"],["(A) 234","(B) 729","(C) 730","(D) 1.093","(E) 2.187"],["(A) R$ 1.895,00","(B) R$ 2.085,00","(C) R$ 2.350,00","(D) R$ 3.640,00","(E) R$ 6.295,00"],["(A) aumento de 9%.","(B) redução de 5%.","(C) redução de 9%.","(D) aumento de 19%.","(E) igualdade de áreas."],["(A) a partir do 4° mês.","(B) a partir do 5° mês.","(C) a partir do 7° mês.","(D) a partir do 10° mês.","(E) sempre."]];

let gabarito = ["d) Somente as afirmações II e III estão corretas.","e) 0,8π m ","c) 50 pessoas","d) 2 e1","c) 96","(C) 41","(D) 1.093","(A) R$ 1.895,00","(C) redução de 9%.","(B) a partir do 5° mês."];  
let aux = 0;
let ctd = 0;
let pontos = 0;

document.getElementById('parag').innerHTML="Pontos:"+pontos;
for (let i = 1; i <= 5; i++) {
    document.getElementById('questao').innerHTML = pergunta[aux];
    button = document.getElementById('b'+i);
    button.textContent = resposta[aux][i-1];
} 
function clicou() {
    console.log(event.target.textContent);
    console.log(gabarito[ctd]);    
    if (event.target.textContent == gabarito[ctd]) {
        document.getElementById('parag').innerHTML = "pontos: "+pontos;
        if (aux == pergunta.length) {
            return fim();
        }
        else {
            pontos++;
            for (let i = 1; i <= 5; i++) {
            let button = document.getElementById('b'+i);
            button.textContent = resposta[aux][i-1];
            document.getElementById('questao').innerHTML = pergunta[aux];            
            }
             console.log("acertei");
             ctd++;
             aux++;
             console.log("ctd"+ctd);
             console.log("aux"+aux);
             muda();

        }   
        }
        else{
            fim();
        }
}

function fim(){
    aux = 0;
    ctd = 0;
    tem = 0;
    pontos = 0;
    muda();
    alert("Fim de Jogo\n Sua pontuação foi "+pontos+" pontos");
    pontos = 0;
}
function muda() {
    document.getElementById('parag').innerHTML="Pontos:"+pontos;
    for (let i = 1; i <= 5; i++) {
        document.getElementById('questao').innerHTML = pergunta[aux];
        button = document.getElementById('b'+i);
        button.textContent = resposta[aux][i-1];
    } 
}
function clicouConcluido() {
    let nickname = document.getElementById("nickname").value;
    this.name = nickname;
    document.getElementById("ocultanick").style.display = "none";    
    document.getElementById("ocultachat").style.display = "block";  
}
function limpa() {
    divChat.innerHTML = "";   
}
form.addEventListener('submit', function(e) {  
    this.chatComent = document.getElementById("chatComent").value;
    db.ref('/chat').push({            
        nickname:this.nickname.value,
        chatcoment:this.chatComent.value
    });
    e.preventDefault();
});
   
db.ref('/chat').on('child_added', function(chat) {
    const pNick = document.createElement('p');
    const pChat = document.createElement('p');   
    pNick.textContent = chat.val().nickname+": "+chat.val().chatcoment;
    divChat.appendChild(pNick);
});