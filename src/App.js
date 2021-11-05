import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

// import { fetchSmurfs } from './actions somewhere'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.
//! meaning we want to pass in the action from our reducer function to here.
//?why is it important that we do that? what is it doing that it needs fetch smurfs?
/**
 *  useEffect(()=>{
 *      props.fetchSmurfs( does anything go in here? )
 *   }, [])
 */
