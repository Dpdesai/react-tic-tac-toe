import { useState } from "react"

export default function Player({name, symbol, isActive}) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name)

    function handleEditing() {
        setIsEditing((editing) => !editing);
    }

    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span className="player">
                {isEditing ? 
                    <input type="text" required value={playerName} onChange={handleChange}/> : 
                    <span className="player-name">{playerName}</span>
                }
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )

}