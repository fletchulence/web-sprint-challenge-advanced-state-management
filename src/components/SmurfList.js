import React from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux';

 const SmurfList = (props)=> {

    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">

        {
        props.smurfs ?
        props.smurfs.map((smurf, idx)=>{
         return (
            <Smurf key={idx} smurf={smurf}/>
         )
     }): null
     }

    </div>);
}

const mapStateToProps = state =>({
    smurfs: state.smurfs,
    isLoading: state.isLoading
})

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
    //import connect ? and mapStateToProps
//2. Replace the single Smurf component instance with a map, return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.