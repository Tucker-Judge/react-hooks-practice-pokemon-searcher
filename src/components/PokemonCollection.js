import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import { useEffect,useState} from "react"


function PokemonCollection() {
//fetch is not working properly
// I have compared code and checked available resources including chat gpt at a low point
// Dont even have health insurance but im finna get therapy
// 


  //trying to put list here for code to compute
  const [pokemon, setPokemon] = useState([])
  //fetch var
  const fetchingData = async() => {
   const req = await fetch(`http://localhost:3000/pokemon`)
   const res = await req.json()
   console.log(res)
   setPokemon(res)
  }
  //run fetch once
  useEffect(() => {
    fetchingData()
  },[])
  console.log(setPokemon)
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemon.map((pokeman) => {
      return (
      <PokemonCard key={pokeman.id}pokeman={pokeman}/>
      )
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
