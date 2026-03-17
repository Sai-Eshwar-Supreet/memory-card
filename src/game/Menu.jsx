import { DIFFICULTY } from "./config/GameConfig";
import '../styles/Menu.css';

function Menu({difficultyId, onDifficultyChange, onSwitchScene}){

    function handleDifficultyChange(event){
        const val = event.target.value;

        switch(val){
            case 'easy': 
                onDifficultyChange(DIFFICULTY.EASY);
                break;
            case 'normal': 
                onDifficultyChange(DIFFICULTY.NORMAL);
                break;
            case 'hard': 
                onDifficultyChange(DIFFICULTY.HARD);
                break;
        }
    }

    function handleStartClick(){
        onSwitchScene('gameplay');
    }

    return (<>
    <div className="main-container">
        <header className="game-header">
            <h1 className="logo-title">MEMORY CARD</h1>
        </header>
        <div className="button-panel vertical-panel">
            <select name="difficulty" value={difficultyId} id="difficulty" onChange={handleDifficultyChange}>
                <option value="easy">EASY</option>
                <option value="normal">NORMAL</option>
                <option value="hard">HARD</option>
            </select>
            <button className="cta" onClick={handleStartClick} >START</button>
        </div>
    </div>
    </>)
}

export default Menu;