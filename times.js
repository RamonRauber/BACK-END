let times= [
    {
        nome: "Magno",
        goleiro: "André Deko",
        alaDireita: "Dieguinho",
        alaEsquerda: "Leandro Lino",
        pivo: "Leozin",
        fixo: "Rodrigo",
        tecnico: "Douglão",
        vitorias: 31,
        derrotas: 5,

    },
    {
        nome: "Corinthians",
        goleiro: "Koji",
        alaDireita: "Daniel",
        alaEsquerda: "Edimar",
        pivo: "Gugu Flores",
        fixo: "Sinésio",
        tecnico: "Malafaia",
        vitorias: 18,
        derrotas: 15,

    },
    {
        nome: "Santo André",
        goleiro: "Caio",
        alaDireita: "Xaropinho",
        alaEsquerda: "Gui Henriques",
        pivo: "Cauê",
        fixo: "Felipe",
        tecnico: "Cidão",
        vitorias: 20,
        derrotas: 19,

    },
    {
        nome: "Joinville",
        goleiro: "Kleyton",
        alaDireita: "Alex",
        alaEsquerda: "Lucas Cézar",
        pivo: "Dieguinho",
        fixo: "Ernani",
        tecnico: "Herick",
        vitorias: 31,
        derrotas: 4,

    },
    {
        nome: "ACBF",
        goleiro: "Ângelo",
        alaDireita: "Marcolla",
        alaEsquerda: "Alves",
        pivo: "Camilo",
        fixo: "Daniel",
        tecnico: "Sandro",
        vitorias: 24,
        derrotas: 11,

    }
]

function verTimes (){
    times.forEach ((time) => {
        console.log (time.nome + "-" + time.goleiro + "(goleiro)," + time.alaDireita + "(Ala Direita)," + time.alaEsquerda + "(Ala Esquerda)," + time.pivo + "(Pivo)," + time.fixo + "(Fixo),"+ time.tecnico + "(Técnico)," + time.vitorias + "(Vitórias)," + time.derrotas + "(Derrotas)")
    }
);
}
verTimes();