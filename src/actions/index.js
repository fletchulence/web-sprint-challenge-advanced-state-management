import axios from 'axios';

export const fetchSmurfs =() =>{
   return (dispatch) => {
      dispatch({type: FETCH_START})
      axios.get('http://localhost:3333/smurfs')
        .then(res=>{
           //this will dispatch fetchSucess
           console.log(res.data[0])
        })
        .catch(err =>{
           //this will dispatch FETCH_ERR
           console.error(err)
        })
   }
}

export const FETCH_START = 'FETCH_START';

export function fetchStart() {
   return({ type: FETCH_START})
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.