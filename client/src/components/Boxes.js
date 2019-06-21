import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchBoxes} from '../actions/boxActions';

 class Boxes extends Component {
     componentDidMount() {
         this.props.fetchBoxes();
     }

    render() {
        const boxItems = this.props.boxes.map(box => 
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
const mapStateToProps = state => ({
    boxes: state.boxes.items
})

export default connect(mapStateToProps, {fetchBoxes}) (Boxes);