import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchBoxes} from '../actions/boxActions';

 class Boxes extends Component {



    render() {
        const boxItems = this.state.boxes.map(box => 
            (<div key={box.id}>
                <h3>{box.name}</h3>
                <p>{box.description}</p>
               
            </div>

            ))
        
        return (
            <div>
                {boxItems}
            </div>
        )
    }
}
export default connect(null, {fetchBoxes}) (Boxes);