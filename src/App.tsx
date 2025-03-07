import './App.css';
import CharacterGallery from "./components/CharacterGallery.tsx";
import {useState} from "react";
import {characters} from "./Characters.ts";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home.tsx";
import Header from "./components/Header.tsx";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";

export default function App() {
    const [searchText, setSearchText] = useState("");

    // Charaktere filtern
    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/characters"
                        element={
                            <>
                                <input
                                    type="text"
                                    onChange={(e) => setSearchText(e.target.value)}
                                    placeholder="Search for a character"
                                />
                                {filteredCharacters.length > 0 ? (
                                    <CharacterGallery characters={filteredCharacters} />
                                ) : (
                                    <p>No characters found</p>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/characters/:id"
                        element={<CharacterDetailCard characters={characters} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}
