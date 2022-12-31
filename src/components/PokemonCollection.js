import React,{useEffect, useState} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";



function PokemonCollection(filteredPokemonSearched) {

  const cards = filteredPokemonSearched.map((poke) => { 
    <PokemonCard key={poke.id} poke={poke}/>
    

  })
  
  
  
  return (
    
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {cards}
    </Card.Group>
    
  );
}

export default PokemonCollection;
