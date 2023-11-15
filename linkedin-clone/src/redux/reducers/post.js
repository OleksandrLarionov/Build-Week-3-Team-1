import {
	FETCH_POSTS_REQUEST,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_FAILURE,
	GET_POST_IMAGE,
} from '../action/post';

const initialState = {
	posts: [],
	loading: false,
	error: null,
	postEditor: null,
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POSTS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case GET_POST_IMAGE:
			return {
				...state,
				postEditor: action.payload,
			};
		case FETCH_POSTS_SUCCESS:
			return {
				...state,
				loading: false,
				posts: action.payload,
			};
		case FETCH_POSTS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default postsReducer;
