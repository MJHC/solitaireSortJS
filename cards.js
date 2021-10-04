function createDeck(){
    let deck = [], s = 1, v = 1;
    for(let i = 0; i < 52; i++){
        deck[i] = {value: v, suit: s};
        v++;
        
        if(v > 13){
            v = 1;
            s++;
        }
    }
    return deck;
}

function shuffleCards(cards){
    let l;
    for(let i = 0; i < cards.length; i++){
        let p = Math.floor(Math.random() * 51);
        l = cards[p];
        cards[p] = cards[i];
        cards[i] = l;
    }
}