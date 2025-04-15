let times= require("./dados.json")

function verTimes (){
    times.forEach ((time) => {
        console.log (time.nome + "-" + time.goleiro + "(goleiro)," + time.alaDireita + "(Ala Direita)," + time.alaEsquerda + "(Ala Esquerda)," + time.pivo + "(Pivo)," + time.fixo + "(Fixo),"+ time.tecnico + "(Técnico)," + time.vitorias + "(Vitórias)," + time.derrotas + "(Derrotas)")
    }
);
}
verTimes();

function criarArquivo(){
    let dadosEmtexto = JSON.stringify(times);
    console.log(dadosEmtexto);
    const fs = require("fs");
    fs.writeFileSync("dados.json", dadosEmtexto);
    console.log("Arquivo gerado com sucesso!")
}
function marcarJogos(timeA, timeB, data, horario, estadio, cidade){
    let jogos = require("./jogos.json");
    jogo = {
        timeA: timeA,
        timeB: timeB,
        data: data,
        horario: horario,
        estadio: estadio,
        cidade: cidade,
    }
    jogos.push(jogo);
    jogosJSON = JSON.stringify(jogos);
    const fs = require('fs');
    fs.writeFileSync("jogos.json", jogosJSON);
}
marcarJogos("")

//criarArquivo();

verTimes();