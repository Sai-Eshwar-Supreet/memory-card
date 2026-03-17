import { buildURL } from "./utils/ImageProvider";
import '../styles/Card.css';

function Card({id, handleCardClick}){
    return <button className="card"><img onClick={handleCardClick} data-id={id} src={buildURL(id)} alt="Game card" /></button>
}

export default Card;