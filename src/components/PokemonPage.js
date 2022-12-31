import React,{useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
function PokemonPage() {
 const [pokemons,setPokemons] = useState([])
 const [searchTerm,setSearchTerm] = useState("")
 
 const fetchingPokemon = async()=> {
  const request = await fetch("http://localhost:3000/pokemon")
  const res = await request.json()
  console.log(res)
  setPokemons(res)
}
useEffect(()=> {
  fetchingPokemon()
},[])

   
   const filteredPokemonsSearched = pokemon.filter((poke) => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
   })

   function addPokemons(newPoke){
    setPokemons(pokemons, ...newPoke)
   }
  

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemons={addPokemons}/>
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <br />
      <PokemonCollection filteredPokemonsSearched={filteredPokemonsSearched}/>
    </Container>
  );
}

export default PokemonPage;
