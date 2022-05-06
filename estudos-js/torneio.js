const jogador1 = new Array("nome1", "jogada1");
const jogador2 = new Array("nome2", "jogada2");


const game = new Array(jogador1, jogador2, 1);


function rpsGameWinner(game) {
    if (game.length != 2) {
        throw 'WrongNumberOfPlayers';  
    }  
}    

console.log(rpsGameWinner(game))