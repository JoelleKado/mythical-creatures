import React, { Component } from 'react';

class CreatureList extends Component {
    render() {
        console.log('thisis this.props', this.props);        
        return (
            <div>
                <h2>Creature List</h2>
                <ul>
                    {this.props.creatureList.map((creature, i)=>{
                        return (
                        <li key={creature.name}> {/*can also use a key of {i}*/}
                            Creature: {creature.name}
                        </li>
                        )
                    })}
                </ul>
            </div>
        )
    } 
}

export default CreatureList




