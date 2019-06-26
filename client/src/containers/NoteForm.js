import React, { Component } from 'react'
import{connect} from 'react-redux';
import {newNote} from '../actions/noteActions';
import '../components/Home.css';

 class NoteForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
            subject: "",
            content: ""
        }
    }

    handleChange =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.props.newNote(this.state);
        event.preventDefault();
        this.setState({
            subject: "",
            content: ""
        })
    }
   
    render() {
       
        return (    
            <div className= 'container'>
                <h2>Notes: </h2>

                <form onSubmit={this.handleSubmit}>
                   <div className="notes">
                       <label>Subject:</label>
                       <input type="text" onChange={this.handleChange} name ="subject" value={this.state.subject}/>
                        <br/>
                       <label>Content:</label>
                       <textarea type="text" onChange={this.handleChange} name ="content" value={this.state.content}/>
                       <br/>
                      
                       <button className="addnote" type="submit" value="submit">Submit</button>
                   </div>
                </form>
                
            </div>
        )
    }
}
export default connect(null, {newNote})(NoteForm);