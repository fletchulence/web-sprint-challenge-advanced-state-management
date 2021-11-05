import axios from 'axios';

export const fetchSmurfs = () =>{
   return (dispatch) => {
      dispatch(fetchStart())
      axios.get('http://localhost:3333/smurfs')
        .then(res=>{
           //this will dispatch fetchSucess
         //   console.log('THIS IS MY SUCCESS CASE DATA', res.data)
           dispatch(fetchSuccess(res.data))
        })
        .catch(err =>{
           //this will dispatch FETCH_ERR
           dispatch(fetchError(err))
         //   console.error(err)
        })
   }
}

export const FETCH_START = 'FETCH_START';
export function fetchStart() {
   return({ type: FETCH_START })
}

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export function fetchSuccess(smurfs) {
   return({ type: FETCH_SUCCESS, payload: smurfs})
}

export const FETCH_ERR = 'FETCH_ERR';
export function fetchError(errorMessage) {
   return({ type: FETCH_ERR, payload: errorMessage})
}

//?this is where formActions start
export const ADD_SMURF = 'ADD_SMURF';
export function addSmurf(newSmurf){
   return ({ type: ADD_SMURF, payload: newSmurf})
}
export const FORM_ERR = 'FORM_ERR';
export function setError(error){
   return ({ type: FORM_ERR, payload: error})
}



//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.