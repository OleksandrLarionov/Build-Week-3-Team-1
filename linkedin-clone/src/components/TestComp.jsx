import { useDispatch, useSelector } from 'react-redux';
import { getAllProfilesDataAction, getUserDataAction } from '../redux/action';
import { useEffect, useState } from 'react';

const TestComp = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUserDataAction());
		dispatch(getAllProfilesDataAction());
	}, []);
};

export default TestComp;
