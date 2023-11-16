import { GET_ACCESS } from "../action/access";

const initialState = {
   key:'',
   id:'',
};

const accessReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ACCESS:
            return {
              ...state,
                key: action.payload.key,
                id: action.payload.id
                
            };
        default:
            return state;
    }
};
export default accessReducer;