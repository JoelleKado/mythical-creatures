import React, { Component } from 'react';

class CurrentNewCreature extends Component {
    render() {
        console.log('thisis this.props', this.props);
        
        return (
            <p>new creature is: 
                {this.props.pendingCreature.name} and
                {this.props.pendingCreature.origin}
            </p>

        )
    } 
}

export default CurrentNewCreature