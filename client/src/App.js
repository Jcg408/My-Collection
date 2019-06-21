import React from 'react';
import './App.css';
import Boxes from './components/Boxes';
import BoxForm from './components/BoxForm';
import {Provider} from 'react-redux';
import store from './store';



function App() {
  return (
    <Provider store = {store}>
       <div className="App">
        <BoxForm/>
        <hr/>
        <Boxes/>
      </div>
    </Provider>
   
  );
}

export default App;
