import { GET_USER_DATA } from '../action';

const initialState = {
	userData: [],
};

const userDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_DATA:
			return {
				...state,
				userData: [action.payload],
			};

		default:
			return state;
	}
};

export default userDataReducer;
