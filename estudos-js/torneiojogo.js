const jogador1 = ["Gustavo", "TE"];
const jogador2 = ["Andre", "PE"];
const game = [jogador1, jogador2];

function rpsGameWinner(game){
    if (game.length != 2) {
        throw 'WrongNumberOfPlayers';
    }
    if ((jogador1[1] == "PA" && jogador2[1] == "PE") || (jogador1[1] == "PE" && jogador2[1] =="TE") || (jogador1[1] == "TE" && jogador2[1] =="PA")){
        return jogador1;
    } else {
        return jogador2;
    }
}

console.log(rpsGameWinner(game));