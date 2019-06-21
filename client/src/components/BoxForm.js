import React, { Component } from 'react'
import{connect} from 'react-redux';
import {newBox} from '../actions/boxActions';

 class BoxForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
            name: "",
            description: "",
            year: "",
            imgUrl: ""
        }
    }

    handleChange =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const box = {
            name: this.state.name,
            description: this.state.description,
            year: this.state.year,
            imgUrl: this.state.imgUrl
        }

        //callaction
        
    }
    render() {
        return (
            <div>
                <h1>Add Item to Collection</h1>

                <form onSubmit={this.handleSubmit} className="contact">
                   <div>
                       <label>Name:</label>
                       <input type="text" onChange={this.handleChange} name ="name" value={this.state.name}/>
                        <br/>
                       <label>Description:</label>
                       <input type="text" onChange={this.handleChange} name ="description" value={this.state.description}/>
                       <br/>
                       <label>Year:</label>
                       <input type="text" onChange={this.handleChange} name ="year" value={this.state.year}/>
                       <br/>
                       <label>Image: </label>
                       <input type="text" onChange={this.handleChange} name="imgUrl" value={this.state.imgUrl}/>
                       <br/>
                       <button type="submit">Submit</button>
                   </div>
                </form>
                
            </div>
        )
    }
}
export default BoxForm;