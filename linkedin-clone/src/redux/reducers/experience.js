import { GET_EXPERIENCE } from '../action/experience';

const initialState = {
	experienceData: [],
};
const experienceReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_EXPERIENCE:
			return {
				...state,
				experienceData: action.payload,
			};
		default:
			return state;
	}
};

export default experienceReducer;
