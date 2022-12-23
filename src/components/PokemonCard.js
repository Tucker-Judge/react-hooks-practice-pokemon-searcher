import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokeman}) {
  const [src,setSrc] = useState(pokeman.sprites.front)
function handleClick(ev) {
  if (src === pokeman.sprites.front){
    setSrc(pokeman.sprites.back)
  }
  else setSrc(pokeman.sprites.front)
  


}
  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={handleClick}src={src} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokeman.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokeman.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
