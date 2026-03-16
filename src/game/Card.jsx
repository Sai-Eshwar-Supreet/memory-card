import { buildURL } from "./ImageProvider";

function Card({seed, handleCardClick}){
    return <img onClick={handleCardClick} data-id={seed} src={buildURL(seed)} alt="Image of a game card" />
}

export default Card;