import { useState } from 'react';
import Card from './Card';
import { SCENES } from './config/Scenes';
import Modal from "./Modal";
import { shuffle } from './utils/Utils';
import '../styles/GamePlay.css';

// const DEFAULT_GAMEPLAY_STATE = {
//     score: 0,
//     cards: Array.from({length: difficulty.cardCount}, () => createCard()),
//     gameOverData: {isGameOver:false, isGameWon: false, message: null},
// }

function createCard(id = crypto.randomUUID(), isSelected = false){
    return {id, isSelected};
}

function GamePlay({difficulty, highScore, onSwitchScene, onScoreUpdate}){
    const [cards, setCards] = useState(Array.from({length: difficulty.cardCount}, () => createCard()));
    const [score, setScore] = useState(0);
    const[gameOverData, setGameOverData] = useState({isGameOver: false, isGameWon: false, message: null})
    
    function handleCardClick(cardId){
        const cardIndex =  cards.findIndex(card => card.id === cardId);
        const card = cards[cardIndex];

        if(!card) return;

        if(card.isSelected){
            setGameOverData({isGameOver: true, isGameWon: false, message: 'Defeat!'});
            return;
        }
        
        const newScore = score + 1;
        setScore(newScore);
        onScoreUpdate(newScore);
        
        
        const newCards = [...cards];
        newCards[cardIndex] = createCard( cardId, true);
        setCards(shuffle(newCards));

        if(newScore === difficulty.cardCount){
            setGameOverData({isGameOver: true, isGameWon: true, message: 'Victory!'});
            return;
        }
    }
    return (
        <div className='main-container gameplay-container'>
            <header className='game-header'>
                <div className="display-panel horizontal-panel">
                    <p className='display cta'><span className="label">Your Score:</span> <span className="value">{score}</span></p>
                    <p className='display'><span className="label">High Score:</span> <span className="value">{highScore}</span></p>
                </div>
                <div className='button-panel horizontal-panel'>
                    <button onClick={() => onSwitchScene(SCENES.GAMEPLAY)}>Retry</button>
                    <button onClick={() => onSwitchScene(SCENES.MENU)}>Return to menu</button>
                </div>
            </header>
            <div className='cards-container'>
                {
                    cards.map((card) => {
                        return <Card key={card.id} id={card.id} handleCardClick={handleCardClick}/>
                    })
                }
            </div>
            <Modal title={gameOverData.message} status={gameOverData.isGameWon? 'success': 'danger'} open={gameOverData.isGameOver} onCancel={() => onSwitchScene(SCENES.MENU) }>
                <div className="display-panel horizontal-panel">
                    <p className='display cta'><span className="label">Your Score:</span> <span className="value">{score}</span></p>
                    <p className='display'><span className="label">High Score:</span> <span className="value">{highScore}</span></p>
                </div>
                <div className='button-panel horizontal-panel'>
                    <button onClick={() => onSwitchScene(SCENES.GAMEPLAY)}>Retry</button>
                    <button onClick={() => onSwitchScene(SCENES.MENU)}>Return to menu</button>
                </div>
            </Modal>
        </div>
    )
}

export default GamePlay;