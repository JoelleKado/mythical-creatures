import React, { Component } from 'react';

class CreatureItem extends Component {
    render() {
        console.log('thisis this.props', this.props);        
        return (
            <li key={this.props.creature.name}> {/*can also use a key of {i}*/}
                            Creature: {this.props.creature.name} is from {this.props.creature.origin}
                        </li>
        )
    } 
}

export default CreatureItem




