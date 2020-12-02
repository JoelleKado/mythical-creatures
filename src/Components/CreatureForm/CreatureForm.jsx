import React, { Component } from 'react';

class CreatureForm extends Component {
    render() {
        console.log('thisis this.props', this.props);        
        return (
            <div>
                <h2>Add A Creature</h2>
                <input value={this.props.newCreature.name} 
                    placeholder="name" 
                    onChange={this.props.handleNameChange}></input>
                <input 
                    value={this.props.newCreature.origin}
                    placeholder="origin"
                    onChange={this.props.handleOriginChange}></input>
                <button onClick={this.props.addCreature}>ADD new Creature</button>
            </div>
        )
    } 
}

export default CreatureForm;