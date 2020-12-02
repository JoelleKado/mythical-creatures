import React, { Component } from 'react';
import './App.css';
import CurrentNewCreature from '../CurrentNewCreature/CurrentNewCreature.js'
import CreatureList from '../CreatureList/CreatureList.jsx'
import CreatureForm from '../CreatureForm/CreatureForm.jsx';

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
        <CreatureList creatureList={this.state.creatureList}/>
        <CreatureForm 
          newCreature={this.state.newCreature} 
          handleNameChange={this.handleNameChange}
          addCreature={this.addCreature}
          handleOriginChange={this.handleOriginChange}
        />
      </div>
    );//end return
  }
}

export default App;
