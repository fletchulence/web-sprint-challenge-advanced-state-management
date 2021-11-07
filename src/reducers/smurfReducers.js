import { FETCH_START, FETCH_SUCCESS, FETCH_ERR } from '../actions';

export const initialState = {
   smurfs: [],
   isLoading: false,
   error: ''
}

export const smurfReducer = (state = initialState, action)=>{
   //? test to see if connected 
   //console.log('is this working?')
   switch(action.type){
      case FETCH_START:
         // console.log(action.type, 'is starting fetch CASE')
         return ({
            ...state,
            smurfs: [],
            isLoading: true,
            error: ''
         })
      case FETCH_SUCCESS:
         // console.log(action.payload,'successful smurf CASE')
         // const newSmurf = {
         //    id: action.payload
         // }
         return ({
            ...state,
            smurfs: action.payload,
            isLoading: false,
            error: ''
         });
      case FETCH_ERR:
         // console.log(FETCH_ERR, action.payload)
         return({
            ...state,
            smurfs: '',
            isLoading: false,
            error: action.payload
         })
      default:
         return state
      }
   }
   
