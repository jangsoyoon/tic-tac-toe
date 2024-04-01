import { useState } from "react";
export default function Player({name, symbol}){
    const [changeName, setChangeName] = useState(name);
    const [isEditing, setEditing] = useState(false);
    const handleEditClick = ()=>{
        setEditing(prevState => !prevState)
        let changeName = null;
        if(isEditing){
            changeName = document.getElementById("textField").value;
            setChangeName(changeName);
        }
    }
    return (
        <li>
            <span className="player">
             {isEditing ? <input id="textField" type="text" defaultValue={changeName} required/> :  <span className="player-name">{changeName}</span>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>

          </li>
    );
}