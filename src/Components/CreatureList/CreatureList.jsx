import React, { Component } from 'react';
import CreatureItem from '../CreatureItem/CreatureItem.jsx'

class CreatureList extends Component {
    render() {
        console.log('thisis this.props', this.props);        
        return (
            <div>
                <h2>Creature List</h2>
                <ul>
                    {this.props.creatureList.map((creature, i)=>{
                        return (
                            //make a bunch of creature items
                            <CreatureItem key={i} creature={creature}/>
                        )
                    })}
                </ul>
            </div>
        )
    } 
}

export default CreatureList




