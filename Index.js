
let numVitorias = 120
let numDerrotas = 25

let saldo = calcularSaldo(numVitorias, numDerrotas)
let nivel = obterNivel(saldo)

function calcularSaldo(vitorias, derrotas){
    return vitorias - derrotas
}

function obterNivel(vitorias) {
   if (vitorias < 10) {
        return "Ferro"
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze"
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata"
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro"
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante"
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}

console.log(`O Herói tem o saldo de **${saldo}** e está no nível de **${nivel}**`)