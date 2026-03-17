import { useState } from 'react';
import Card from './Card';
import { SCENES } from './config/Scenes';
import Modal from "./Modal";
import { shuffle } from './utils/Utils';

// const DEFAULT_GAMEPLAY_STATE = {
//     score: 0,
//     cards: Array.from({length: difficulty.cardCount}, () => createCard()),
//     gameOverData: {isGameOver:false, isGameWon: false, message: null},
// }

function createCard(id = crypto.randomUUID(), isSelected = false){
    return {id, isSelected};
}

function GamePlay({difficulty, highScore, onSwitchScene, onScoreUpdate}){
    const [cards, setCard] = useState(Array.from({length: difficulty.cardCount}, () => createCard()));
    const [score, setScore] = useState(0);
    const[gameOverData, setGameOverData] = useState({isGameOver: false, isGameWon: false, message: null})
    
    function handleCardClick(event){
        const cardId = event.target.dataset.id;

        const card = cards.find(card => card.id === cardId);

        if(!card) return;

        if(card.isSelected){
            setGameOverData({isGameOver: true, isGameWon: false, message: 'Defeat!'});
            return;
        }
        
        card.isSelected = true;
        const newScore = score + 1;
        setScore(newScore);
        onScoreUpdate(newScore);
        

        setCard(shuffle(cards));

        if(newScore === difficulty.cardCount){
            setGameOverData({isGameOver: true, isGameWon: true, message: 'Victory!'});
            return;
        }
    }
    return (
        <div>
            <header>
                <p>Score: {score}</p>
                <p>High Score: {highScore}</p>
            </header>
            <div>
                {
                    cards.map((card) => {
                        return <Card key={card.id} id={card.id} handleCardClick={handleCardClick}/>
                    })
                }
            </div>
            <Modal open={gameOverData.isGameOver}>
                <h2 className={gameOverData? 'victory-dialog': 'defeat-dialog'}>{gameOverData.message}</h2>
                <p>Your score: {score}</p>
                <p>High score: {highScore}</p>
                <div className='button-panel horizontal-panel'>
                    <button onClick={() => onSwitchScene(SCENES.GAMEPLAY)}>Retry</button>
                    <button onClick={() => onSwitchScene(SCENES.MENU)}>Return to menu</button>
                </div>
            </Modal>
        </div>
    )
}

export default GamePlay;