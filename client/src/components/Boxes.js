import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchBoxes} from '../actions/boxActions';
import {removeBox} from '../actions/boxActions';
import {NavLink} from 'react-router-dom';
import './Home.css'


 class Boxes extends Component {
     componentDidMount() {
         this.props.fetchBoxes();
     }

     handleDelete =() => {
         this.props.removeBox();
       
     }
    render() {
        const boxItems = this.props.boxes.map(box => 
            (<div key={box.id} className="jumbotron">
             <img src= {box.imgUrl} alt={box.name}/>
             <React.Fragment>
                 <div class="desc">
                <h2>{box.name}</h2>
                <p>{box.description} {box.size} - {box.year}</p>
                <br/>
                 </div>
                
             </React.Fragment>
            
             <button><NavLink to ="#" onClick={(e) => this.handleDelete(box.id)} >Delete</NavLink></button>
            </div>
            ))
        
        return (
            <div className = "boxitems">
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