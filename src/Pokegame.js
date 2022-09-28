import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
      { id: 9, name: "Blastoise", type: "water", base_experience: 90 },
      { id: 14, name: "Kakuna", type: "poison", base_experience: 53 },
      { id: 17, name: "Pidgeotto", type: "flying", base_experience: 155 },
      { id: 32, name: "Nidoran", type: "poison", base_experience: 180 },
      { id: 38, name: "Ninetales", type: "fire", base_experience: 132 },
      { id: 40, name: "Wigglytuff", type: "normal", base_experience: 65 },
      { id: 42, name: "Golbat", type: "poison", base_experience: 225 },
      { id: 52, name: "Meowth", type: "normal", base_experience: 260 },
    ],
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];

    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}
export default Pokegame;
