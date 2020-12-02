import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    newCreature: {
      name: '',
      origin: ''
    },

    creatureList : [
      {
        name : 'Unicorn',
        origin : 'Greece'
      }, 
      {
        name : 'Minotaur',
        origin : 'Britain'
      }
      // {name :'Dragon'}, 
      // {name : 'Dementor'}, 
      // {name : 'Wyrm'}, 
      // {name : 'Leoplurodon'}
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
    //this.state.newCreature

    //this.state.creatureList
    //mutation NOOO
    //this.state.creatureList.push(this.state.newCreature);
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
    
     //let creatureListHtml = [];
    // for(let i=0; i<this.state.creatureList.length; i++) {
    //   creatureListHtml.push(<li>Creature: {this.state.creatureList[i]}</li>)
    // }
    
    // this.state.creatureList.forEach((creature)=>{
    //   //avoid push
    //   creatureListHtml.push(<li>Creature: {creature}</li>)
    // })

    //.map returns an array containing a lot of things
    // let creatureListHtml = this.state.creatureList.map((creature)=>{
    //   return (
    //     <li>Creature: {creature}</li>
    //   )
    // })

    return (
      <div>
        <p>splatting to dom looks like this:
          <pre>
            {JSON.stringify(this.state.creatureList)}
          </pre>
        </p>
        <p>new creature is {this.state.newCreature.name} and {this.state.newCreature.origin}</p>
        <div>
          <input value={this.state.newCreature.name} placeholder="name" onChange={this.handleNameChange}></input>
          <input value={this.state.newCreature.origin} placeholder="origin" onChange={this.handleOriginChange}></input>
        <button onClick={this.addCreature}>ADD new Creature</button>
        </div>
    {/* <p>
      getting one is like this:
      {this.state.creatureList[0]}</p> */}
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
