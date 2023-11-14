import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileDataReducer from '../reducers/profile';
import userDataReducer from '../reducers/user';

const allReducers = combineReducers({
	profile: profileDataReducer,
	user: userDataReducer,
});
const store = configureStore({
	reducer: allReducers,
});

export default store;
