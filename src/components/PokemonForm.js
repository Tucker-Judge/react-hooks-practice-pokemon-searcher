import React,{useState, useEffect} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm(pokemons,setPokemons) {
  const [name,setName] = useState("")
  const [imageFront,setImageFront] = useState("")
  const [hp,setHp] = useState("")
  const [imageBack,setImageBack] = useState("")
  const posting = async() => {
    const request = await fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: { "Content-Type": "application/json",
      "accept": "application/json"
    },
      body: JSON.stringify(newPokemon)
    })
    const response = request.json()
    console.log(response)
  }
  function handleSubmit(){
  const newPokemon ={
    name: name,
    hp: hp,
    sprites: {
      imageFront: imageFront,
      imageBack: imageBack
    }
}
setPokemons([...pokemons, newPokemon])


}
useEffect(() => {
  anotherFetch()
},[])
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={(e)=> setName(e.target.value)}  />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={(e)=> setHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={imageFront} onChange={(e)=> setImageFront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={imageBack} onChange={(e)=> setImageBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
