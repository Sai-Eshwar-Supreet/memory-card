import { useState } from "react";
import Card from "./Card";


const CARD_COUNT = 10;

function createCards(){
    return Array.from({length: CARD_COUNT}, () => crypto.randomUUID() );
}

function shuffle(array){
    const shuffledArray = [...array];

    for(let i = shuffledArray.length -1; i > 0; i --){
        const swapIndex = Math.floor(Math.random() * (i + 1));

        [shuffledArray[swapIndex], shuffledArray[i]] = [shuffledArray[i], shuffledArray[swapIndex]];
    }

    return shuffledArray;
}

function Game(){
    const [cardIds, setCardIds] = useState(createCards());
    const [selectedCards, setSelectedCards] = useState([]);

    function toMainMenu(){
        // for now reset the states to show redirection
        setCardIds([]);
        setSelectedCards([]);

    }

    function handleCardClick(event){
        const cardId = event.target.dataset.id;
        if(selectedCards.includes(cardId)){
            console.log('Game over');
            toMainMenu();
            return;
        }
        
        if(selectedCards.length === CARD_COUNT - 1){
            console.log('You win!');
            toMainMenu();
            return;
        }
        
        setCardIds((prev) => shuffle(prev));
        setSelectedCards(prev => [...prev, cardId]);
    }

    return (<div>
                {
                    cardIds.map((seed) => {
                        return <Card key={seed} seed={seed} handleCardClick={handleCardClick}/>
                    })
                }
        </div>)


}

export default Game;