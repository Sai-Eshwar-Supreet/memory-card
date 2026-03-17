import { DIFFICULTY } from "./config/GameConfig";
import '../styles/Menu.css';
import Modal from "./Modal";
import { useState } from "react";

function Menu({difficultyId, onDifficultyChange, onSwitchScene}){

    const [openHelp, setOpenHelp] = useState(false);

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
            <button className="cta" onClick={handleStartClick} >START</button>
            <select name="difficulty" value={difficultyId} id="difficulty" onChange={handleDifficultyChange}>
                <option value="easy">EASY</option>
                <option value="normal">NORMAL</option>
                <option value="hard">HARD</option>
            </select>
            <button onClick={() => setOpenHelp(true)}>HELP</button>
        </div>
        <Modal title='Rules' open={openHelp} onCancel={() => setOpenHelp(false)}>
            <p>Don't click the same card twice.</p>
            <button onClick={() => setOpenHelp(false)}>Close</button>
        </Modal>
    </div>
    </>)
}

export default Menu;