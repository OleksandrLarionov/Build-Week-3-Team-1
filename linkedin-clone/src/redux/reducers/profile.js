import { GET_PROFILE_DATA } from '../action';

const initialState = {
	profileData: [],
};

const profileDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PROFILE_DATA:
			return {
				...state,
				profileData: [action.payload],
			};

		default:
			return state;
	}
};

export default profileDataReducer;
