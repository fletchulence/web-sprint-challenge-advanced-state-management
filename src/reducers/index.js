import { FETCH_START, FETCH_SUCCESS } from '../actions';

export const initialState = {
   smurf: [
      {
         id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
         name:'Poppa Smurf',
         position:'Village Leader',
         nickname: 'Pops',
         description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
       }
   ],
   isLoading: false,
   error: ''
}

const reducer = (state = initialState, action)=>{
   //? test to see if connected 
   //console.log('is this working?')
   switch(action.type){
      case FETCH_START:
         console.log(FETCH_START, 'is working')
         return {
            ...state,
            smurf: [],
            isLoading: true,
            error: ''
         }
      case FETCH_SUCCESS:
         console.log(FETCH_SUCCESS,'successful smurf')
         // const newSmurf = {
         //    id: action.payload
         // }
         return {
            ...state,
            smurf: [...state.smurf, action.payload],
            // isLoading: false,
            // error: ''
         };
      // case FETCH_ERR:
      //    console.log('getting an error')
      //    return{
      //       ...state,
      //       smurfs: '',
      //       isLoading: false,
      //       error: action.payload
      //    }
      default:
         console.log('reducer went default state')
         return state;
   }

}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
      //! we will have to make a whole new smurf object - id=Date.now()
//7. Add in a reducer case that adds in a value to the error message.