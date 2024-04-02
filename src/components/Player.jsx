import { useState } from "react";
export default function Player({name, symbol}){
    const [changeName, setChangeName] = useState(name);
    const [isEditing, setEditing] = useState(false);
    const handleEditClick = ()=>{
        setEditing(prevState => !prevState) 
    }

    const changeHandling = (e) =>{
        setChangeName(e.target.value);
    }
    return (
        <li>
            <span className="player">
             {isEditing ? <input id="textField" type="text" value={changeName} onChange={changeHandling} required/> :  <span className="player-name">{changeName}</span>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>

          </li>
    );
}