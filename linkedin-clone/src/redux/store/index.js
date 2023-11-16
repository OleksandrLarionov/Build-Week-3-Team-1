import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileDataReducer from '../reducers/profile';
import userDataReducer from '../reducers/user';
import jobsReducer from '../reducers/job';
import experienceReducer from '../reducers/experience';
import postsReducer from '../reducers/post';
import commentReducer from '../reducers/comments';

const allReducers = combineReducers({
	profile: profileDataReducer,
	user: userDataReducer,
	job: jobsReducer,
	experience: experienceReducer,
	post: postsReducer,
	comments: commentReducer,
});
const store = configureStore({
	reducer: allReducers,
});

export default store;
