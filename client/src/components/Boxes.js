import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchBoxes} from '../actions/boxActions';
import {removeBox} from '../actions/boxActions';
import {Link} from 'react-router-dom';

 class Boxes extends Component {
     componentDidMount() {
         this.props.fetchBoxes();
     }

     handleDelete =() => {
         this.props.removeBox();
       
     }

    
    
    render() {
        const boxItems = this.props.boxes.map(box => 
            (<div key={box.id} className="container">
             <img src= {box.imgUrl} alt={box.name}/>
             <h2>{box.name}</h2>
             <p>{box.description} {box.size} - {box.year}</p>
             <br/>
             <Link to ="#" onClick={(e) => this.handleDelete(box.id)} >Delete</Link>
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

// const mapDispatchToProps = dispatch => {
//     return {
//      addReview: review => dispatch({ type: "ADD_REVIEW",  review }),
//      deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
//     }
//   }

export default connect(mapStateToProps, {fetchBoxes, removeBox}) (Boxes);