import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  populatePokemon = () => {
   return this.props.pokemon.map(singleMon => {
     return <PokemonCard key={singleMon.id} data={singleMon}/>
    })
  }
  
  render() {
  
    return (

      <Card.Group itemsPerRow={6}>
        {this.populatePokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
