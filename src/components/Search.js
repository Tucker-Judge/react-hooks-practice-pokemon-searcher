import React,{useState} from "react";

function Search(setSearchTerm) {
  // pokemons,setPokemons,searchTerm, 
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" 
         onChange = {(e) => setSearchTerm(value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
