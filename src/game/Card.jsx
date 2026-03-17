import { buildURL } from "./utils/ImageProvider";
import '../styles/Card.css';

function Card({id, handleCardClick}){
    return <button className="card" onClick={() => handleCardClick(id)}><img src={buildURL(id)} alt="Game card" /></button>
}

export default Card;