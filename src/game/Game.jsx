import { useState } from "react";
import { DIFFICULTY } from "./config/GameConfig";
import { SCENES } from "./config/Scenes";
import Menu from "./Menu";
import GamePlay from "./GamePlay";
import '../styles/Game.css';

function Game(){
    const [state, setState] = useState({scene: SCENES.MENU, sceneInstanceId: crypto.randomUUID(), difficulty: DIFFICULTY.NORMAL, highScore: 0});

    function handleSceneSwitch(scene){
        setState({...state, scene: scene, sceneInstanceId: crypto.randomUUID()});
    }
    
    function handleDifficultyChange(difficulty){
        if(difficulty.id === state.difficulty.id ) return;
        setState({...state, difficulty: difficulty});
    }
    
    function handleScoreUpdate(score){
        if(score > state.highScore){
            setState({...state, highScore: score});
        }
    }

    return (<>
        {(state.scene === SCENES.MENU) && <Menu key={state.sceneInstanceId} difficultyId={state.difficulty.id} onDifficultyChange={handleDifficultyChange} onSwitchScene={handleSceneSwitch}/>}
        {(state.scene === SCENES.GAMEPLAY) && <GamePlay key={state.sceneInstanceId} highScore={state.highScore} difficulty={state.difficulty} onSwitchScene={handleSceneSwitch} onScoreUpdate={handleScoreUpdate}/>}
    </>)
}

export default Game;