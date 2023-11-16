import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileDataReducer from '../reducers/profile';
import userDataReducer from '../reducers/user';
import jobsReducer from '../reducers/job';
import experienceReducer from '../reducers/experience';
import postsReducer from '../reducers/post'
import accessReducer from '../reducers/access';

const allReducers = combineReducers({
	profile: profileDataReducer,
	user: userDataReducer,
	job: jobsReducer,
	experience: experienceReducer,
	post: postsReducer,
	access:	accessReducer,
});
const store = configureStore({
	reducer: allReducers,
});

export default store;
