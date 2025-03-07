import {Link} from "react-router";


export default function Header(){
    return(
        <header className = "header">
            <h1 className = "header-title"> Rick and Morty</h1>
            <nav className="header-nav">
                <ul>
                    <li> <Link to ="/"> Home </Link> </li>
                    <li> <Link to="/characters">Characters</Link> </li>


                </ul>
            </nav>
        </header>
    );
}