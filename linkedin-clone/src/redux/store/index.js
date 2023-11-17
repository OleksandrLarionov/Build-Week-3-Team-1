import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileDataReducer from '../reducers/profile';
import userDataReducer from '../reducers/user';
import jobsReducer from '../reducers/job';
import experienceReducer from '../reducers/experience';
<<<<<<< HEAD
import postsReducer from '../reducers/post'
import accessReducer from '../reducers/access';
=======
import postsReducer from '../reducers/post';
import commentReducer from '../reducers/comments';
>>>>>>> main

const allReducers = combineReducers({
	profile: profileDataReducer,
	user: userDataReducer,
	job: jobsReducer,
	experience: experienceReducer,
	post: postsReducer,
<<<<<<< HEAD
	access:	accessReducer,
=======
	comments: commentReducer,
>>>>>>> main
});
const store = configureStore({
	reducer: allReducers,
});

export default store;
