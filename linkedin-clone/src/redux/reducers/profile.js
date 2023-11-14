import { GET_PROFILE_DATA } from '../action';
import { SET_MODAL } from '../action';

const initialState = {
	profileData: [],
	modal: false,
};

const profileDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PROFILE_DATA:
			return {
				...state,
				profileData: [action.payload],
			};
		case SET_MODAL:
			return {
				...state,
				modal: [action.payload],
			};

		default:
			return state;
	}
};

export default profileDataReducer;
