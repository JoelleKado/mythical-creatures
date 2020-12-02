import React, { Component } from 'react';
import './App.css';
import CurrentNewCreature from '../CurrentNewCreature/CurrentNewCreature.js'
import CreatureList from '../CreatureList/CreatureList.jsx'

class App extends Component {

  state = {
    newCreature: {
      name: '',
      origin: ''
    },

    creatureList : [
      {name : 'Unicorn', origin : 'Greece'}, 
      {name : 'Minotaur',origin : 'Britain'}
    ]
  }

  handleNameChange = (event) => {
    this.setState({
      newCreature : {
        ...this.state.newCreature,
        name : event.target.value
      }
    })
  }

  handleOriginChange = (event) => {
    this.setState({
      newCreature : {
        ...this.state.newCreature,
        origin : event.target.value
      }
    })
  }

  addCreature = () => {
    console.log('clicked');
    this.setState({
      creatureList : [
        ...this.state.creatureList,
        this.state.newCreature
      ]
    })

    //clear new creature
    this.setState({
      newCreature : {
        name: '',
        origin: ''
      }
    })
  }





  render() {
    console.log('render');
    
    return (
      <div>
        <p>splatting to dom looks like this:
          <pre>
            {JSON.stringify(this.state.creatureList)}
          </pre>
        </p>
        <CurrentNewCreature 
          taco="delicious"
          pendingCreature = {this.state.newCreature}
        />
        <div>
          <input value={this.state.newCreature.name} placeholder="name" onChange={this.handleNameChange}></input>
          <input value={this.state.newCreature.origin} placeholder="origin" onChange={this.handleOriginChange}></input>
        <button onClick={this.addCreature}>ADD new Creature</button>
        </div>
    
      <ul>
        {this.state.creatureList.map((creature, i)=>{
      return (
        <li key={creature.name}>   {/*can also use a key of {i}*/}
          Creature: {creature.name}
          </li>
      )
    })}


      </ul>
      </div>
    );//end return
  }
}

export default App;
