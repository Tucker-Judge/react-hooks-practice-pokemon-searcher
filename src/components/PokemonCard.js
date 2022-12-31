import React,{useState} from "react";
import { Card } from "semantic-ui-react";
//switching pokemon to filteredList
function PokemonCard({poke}) {
  const [flipToggle, setFlipToggle] =useState(false)

const handleClick = (e) =>{
  setFlipToggle(!flipToggle)
  e.preventDefault()
}

 
 return (
    <Card>
      <div>
        <div className="image" onClick={handleClick} >
        {flipToggle ? <img src={poke.sprites.back} alt="oh no!"/>: 
        <img src={poke.sprites.front} alt="oh no!"/>}
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
