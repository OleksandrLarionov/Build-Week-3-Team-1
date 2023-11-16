export const GET_JOBS = 'GET_JOBS';
export const GET_PROFILE_DATA = 'GET_PROFILE_DATA';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SET_MODAL = 'SET_MODAL';
export const changeModalAction = (state) => ({
	type: SET_MODAL,
	payload: state,
});
// Profile Data
// Per Cambiare il profilo sostituire i dati dell'export con quelli del profilo desiderato in 'Users'
// Per adesso va bene cosi XD ...
export const personalUserID = '6555d9701588010018642c81';
export const personalkey =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1ZDk3MDE1ODgwMTAwMTg2NDJjODEiLCJpYXQiOjE3MDAxMjUwNDAsImV4cCI6MTcwMTMzNDY0MH0.azwLh0YiJzuA7zdCnVxC3ngpenHXP12ENW8i_qBpo38';

const Users = {
	alex: {
		personalUserID: '6551e7bbc55e7e0018f83bfb',
		personalkey:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTdiYmM1NWU3ZTAwMThmODNiZmIiLCJpYXQiOjE2OTk4NjY1NTYsImV4cCI6MTcwMTA3NjE1Nn0.0n8X0s6yl9NBb7CzEgnDxCdlw4P1RRcSjfwOeqmGSzM',
	},
	federico: {
		personalUserID: '6555d9701588010018642c81',
		personalkey:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1ZDk3MDE1ODgwMTAwMTg2NDJjODEiLCJpYXQiOjE3MDAxMjUwNDAsImV4cCI6MTcwMTMzNDY0MH0.azwLh0YiJzuA7zdCnVxC3ngpenHXP12ENW8i_qBpo38',
	},
	noemi: {
		personalUserID: '6551e92bc55e7e0018f83bfd',
		personalkey:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTkyYmM1NWU3ZTAwMThmODNiZmQiLCJpYXQiOjE2OTk4NjY5MjMsImV4cCI6MTcwMTA3NjUyM30.xCAerk3OPcMhEr-rbDujIGhnmF5r6XxFezoOalSvPNo',
	},
	salvatore: {
		personalUserID: '6551e907c55e7e0018f83bfc',
		personalkey:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTkwN2M1NWU3ZTAwMThmODNiZmMiLCJpYXQiOjE2OTk4NjY5ODYsImV4cCI6MTcwMTA3NjU4Nn0.TBxl6De86CBv2B85k4ziW1xQYLgdRt5VpYj9yR9EY08',
	},
	marissa: {
		personalUserID: '6551ed02c55e7e0018f83c08',
		personalkey:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQwMmM1NWU3ZTAwMThmODNjMDgiLCJpYXQiOjE2OTk4Njc5MDYsImV4cCI6MTcwMTA3NzUwNn0.Q_UCqIM2owNxT5H9RkciUy-DDltNMR2UqPnh6aI11oo',
	},
};

// end profile data
export const getAllProfilesDataAction = (me = '') => {
	return async (dispatch) => {
		const profileApiList = `https://striveschool-api.herokuapp.com/api/profile/${me}`;
		try {
			const profileData = await fetch(profileApiList, {
				method: 'GET',
				headers: {
					Authorization: personalkey,
				},
			});
			if (profileData.ok) {
				const data = await profileData.json();
				setTimeout(() => {
					dispatch({
						type: GET_PROFILE_DATA,
						payload: data,
					});
				}, 500);
			} else {
				throw new Error('Errore nel download dei dati profilo');
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};
};
export const modifyUserAction = (form) => {
	return async (dispatch) => {
		const userModify = `https://striveschool-api.herokuapp.com/api/profile/`;
		try {
			const UserData = await fetch(userModify, {
				method: 'PUT',
				body: JSON.stringify(form),
				headers: {
					Authorization: personalkey,
					'Content-Type': 'application/json',
				},
			});
			if (UserData.ok) {
				const data = await UserData.json();
				console.log('i dati sono stati correttamente modificati', data);
			} else {
				throw new Error('Errore nella modifica dei dati utente');
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};
};

export const getUserDataAction = () => {
	return async (dispatch) => {
		const userApiList = `https://striveschool-api.herokuapp.com/api/profile/${personalUserID}`;
		try {
			const userData = await fetch(userApiList, {
				method: 'GET',
				headers: {
					Authorization: personalkey,
				},
			});
			if (userData.ok) {
				const data = await userData.json();
				setTimeout(() => {
					dispatch({
						type: GET_USER_DATA,
						payload: data,
					});
				}, 500);
			} else {
				throw new Error('Errore nel download dei dati Utente');
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};
};

export const handleSubmitAction = (query) => {
	return async (dispatch) => {
		try {
			const res = await fetch(
				'https://strive-benchmark.herokuapp.com/api/jobs?search=' + query + '&limit=20'
			);
			if (res.ok) {
				const { data } = await res.json();
				console.log(data);
				dispatch({
					type: GET_JOBS,
					payload: data,
				});
			} else {
				throw new Error('Error fetching results');
			}
		} catch (error) {
			console.log(error);
		}
	};
};
