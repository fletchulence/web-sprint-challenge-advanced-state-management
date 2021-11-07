import { ADD_SMURF, FORM_ERR } from '../actions'

export const initialState = {
   smurfs: [],
   error: ''
}

export const formReducer = (state = initialState, action)=>{
   switch (action.type){
      case ADD_SMURF:
         // console.log(action.type)
         return({
            ...state,
            smurfs: [...state.smurfs, action.payload]
         })
      case FORM_ERR:
         return({
            ...state,
            error: action.payload
         })
      default:
         return state
   }

}
