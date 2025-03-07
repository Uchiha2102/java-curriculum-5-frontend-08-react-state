import {characters} from "../Characters.ts";
import {useParams} from "react-router";

export default function CharacterDetail() {
    const {id} = useParams();
    const character = characters.find((char) => char.id === parseInt(id!));

    if (!character) {
        return <h2>Character not found!</h2>;
    }

    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p><strong>Status:</strong> {character.status}</p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Origin:</strong> {character.origin.name}</p>
            <p><strong>Location:</strong> {character.location.name}</p>
        </div>
    );
}
