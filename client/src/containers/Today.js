mport React, { Component } from 'react';

class Today extends Component {
    constructor() {
        super();
        this.state = { today: new Date()};
    }
  
    render() { 
        return ( 
            <h1> Today: {this.state.today.toLocaleTimeString()}</h1>
         );
    }
}
 
export default Today ;
