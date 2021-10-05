import {createDeck, shuffleCards} from "./cards.js";

let deck = createDeck();
shuffleCards(deck);
solitaireSort(deck);

function solitaireSort(deck){
    let game = [[], [], [], [], [], [], []];
    let finish = [[], [], [], []];
    let stack = deck;
    
    setupCards(stack, game);

    for(let i = 0; i < game.length; i++)
        console.log(game[i].length);
}

function setupCards(deck, game){
    let j = 0, k = 0;

    for(let i = 0; i < 28; i++){
        if(j > game.length - 1){
            k++;
            j = 0 + k;
        }

        game[j].push(deck[i]);
        deck.shift
        j++;
    }
}

function isAce(card){
    return card == 1;
}
