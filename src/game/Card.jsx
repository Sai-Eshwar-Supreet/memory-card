import { buildURL } from "./utils/ImageProvider";

function Card({id, handleCardClick}){
    return <img onClick={handleCardClick} data-id={id} src={buildURL(id)} alt="Game card" />
}

export default Card;