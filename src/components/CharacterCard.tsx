import {Character} from "../types/RickAndMortyCharacter.ts";
import "./CharacterCard.css";
import {useNavigate} from "react-router";

type CharacterCardProps = {
    character: Character;
}

export default function CharacterCard(props: Readonly<CharacterCardProps>) {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/characters/${props.character.id}`);
    };
    return (
        <div className="character-card" onClick={handleCardClick}>
            <img src={props.character.image} alt={props.character.name}/>
            <div className="character-card-info">
                <h3>{props.character.name}</h3>
                <p>Species: {props.character.species}</p>
                <p>Status: {props.character.status}</p>
            </div>
        </div>
    );
}
