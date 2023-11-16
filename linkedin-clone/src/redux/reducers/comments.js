import { GET_COMMENTS, GET_ONE_COMMENT } from '../action/commentsAction';

const initialState = {
	commentData: [],
	oneCommentData: [],
};
const commentReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COMMENTS:
			return {
				...state,
				commentData: action.payload,
			};

		case GET_ONE_COMMENT:
			return {
				...state,
				oneCommentData: action.payload,
			};
		default:
			return state;
	}
};

export default commentReducer;
