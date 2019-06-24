import React, { Component } from 'react'
import{connect} from 'react-redux';
import {newBox} from '../actions/boxActions';
import '../components/Home.css';

 class BoxForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
            name: "",
            description: "",
            year: "",
            size: "",
            imgUrl: ""
        }
    }

    handleChange =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.props.newBox(this.state);
        event.preventDefault();
        this.setState({
            name: "",
            description: "",
            year: "",
            size: "",
            imgUrl: ""
        })
        
    }
   
    render() {
        return (    
            <div className= 'container'>
                <h2>Add Item to Collection</h2>

                <form onSubmit={this.handleSubmit}>
                   <div className="boxform">
                       <label>Name:</label>
                       <input type="text" onChange={this.handleChange} name ="name" value={this.state.name}/>
                        <br/>
                       <label>Description:</label>
                       <input type="text" onChange={this.handleChange} name ="description" value={this.state.description}/>
                       <br/>
                       <label>Size:</label>
                       <input type="text" onChange={this.handleChange} name ="size" value={this.state.size}/>
                       <br/>

                       <label>Year:</label>
                       <input type="text" onChange={this.handleChange} name ="year" value={this.state.year}/>
                       <br/>
                       <label>Image: </label>
                       <input type="text" onChange={this.handleChange} name="imgUrl" value={this.state.imgUrl}/>
                       <br/>
                       <button className="addbox" type="submit" value="submit">Submit</button>
                   </div>
                </form>
                
            </div>
        )
    }
}
export default connect(null, {newBox}) (BoxForm);