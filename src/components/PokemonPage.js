import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={pokemon: [], filter: ""}

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(json =>{
      this.setState({pokemon: json})
    })
  }

  filterSearch = (event) => {
    this.setState({filter: event.target.value})
  }

  filterPokemon = () => {
    return this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.filter))
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch("http://localhost:3000/pokemon", this.configPostObj(event))
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
       this.setState({pokemon: [...this.state.pokemon, json]})
    })

  }

  configPostObj = (event) => {
    return {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: event.target.name.value, 
        hp: parseInt(event.target.hp.value, 10),
        sprites: {front: event.target.frontUrl.value, back: event.target.backUrl.value}
      })
    }
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search filterSearch={this.filterSearch}/>
        <br />
        <PokemonCollection pokemon={this.filterPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
