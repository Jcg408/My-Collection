import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBoxes } from '../actions/boxActions';
import { removeBox } from '../actions/boxActions';
import '../css/boxes.css'

class Boxes extends Component {
    componentDidMount() {
        this.props.fetchBoxes();
    }

    handleDelete = (boxid) => {
        this.props.removeBox(boxid);
    }
    
    render() {
        const boxItems = this.props.boxes.map(box =>
            (<div key={box.id} className="container">
                <img src={box.imgUrl} alt={box.name} />
                <div className="container">
                    <h3>{box.name}</h3>
                    <p>{box.description} {box.size} - {box.year}</p>
                    <p>Artist: {box.artist}</p>  <p>Village: {box.location}</p>
                    <br />
                </div>
                <button onClick={() => {this.handleDelete(box.id)} }>Delete</button>
            </div>

            ))

        return (
            <div className="boxitems">
                <h1>Collection</h1>
                {boxItems}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    boxes: state.boxes.items
})

export default connect(mapStateToProps, { fetchBoxes, removeBox })(Boxes);