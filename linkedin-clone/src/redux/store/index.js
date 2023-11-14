import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileDataReducer from '../reducers/profile';
import userDataReducer from '../reducers/user';
import jobsReducer from '../reducers/job';


const allReducers = combineReducers({
	profile: profileDataReducer,
	user: userDataReducer,
	job:jobsReducer,
});
const store = configureStore({
	reducer: allReducers,
});

export default store;
