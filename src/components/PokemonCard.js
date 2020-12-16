import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state= {front: true}

  flipCard= (event) => {
    this.setState({front: !this.state.front})
  }

  render() {
    const {name, hp, sprites} = this.props.data
    return (
      <Card onClick={this.flipCard}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.front ? sprites.front : sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
