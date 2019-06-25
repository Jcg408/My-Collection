import React from 'react';
import '../css/App.css';
import Main from './Home';
import Info from './Info';
import Boxes from '../containers/Boxes';
import BoxForm from '../containers/BoxForm';
import Navbar from './Navbar';
import {Switch, Route} from 'react-router-dom';
import Villages from './Villages';




function App() {
  return (
       <div className="App">
          <Navbar/>
          
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/boxes' component={Boxes} />
            <Route exact path='/box/new' component={BoxForm} />
            <Route exact path='/info' component={Info} />
            <Route exact path='/villages' component={Villages}/>
          
          </Switch>
      </div> 
  );
}

export default App;
