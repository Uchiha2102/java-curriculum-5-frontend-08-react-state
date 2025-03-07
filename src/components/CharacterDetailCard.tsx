import {Character} from "../types/RickAndMortyCharacter.ts";
import {useParams} from "react-router";


type CharacterDetailCardProps = {
    characters: Character[];
};

export default function CharacterDetailCard(props:Readonly<CharacterDetailCardProps>){
    const {id} = useParams();
    const character = props.characters.find((char) => char.id === parseInt(id!));
    if (!character) {
        return <h2>Character not found!</h2>;
    }
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>{character.name}</h1>
            <img
                src={character.image}
                alt={character.name}
                style={{ borderRadius: "10px", width: "200px" }}
            />
            <p><strong>Status:</strong> {character.status}</p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Origin:</strong> {character.origin.name}</p>
            <p><strong>Location:</strong> {character.location.name}</p>
        </div>
    );
}


