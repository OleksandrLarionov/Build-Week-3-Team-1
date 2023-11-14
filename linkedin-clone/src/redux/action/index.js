export const GET_JOBS = 'GET_JOBS'
export const GET_PROFILE_DATA = 'GET_PROFILE_DATA';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SET_MODAL = 'SET_MODAL';
export const changeModalAction = (state) => ({
	type: SET_MODAL,
	payload: state,
});
export const key =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTdiYmM1NWU3ZTAwMThmODNiZmIiLCJpYXQiOjE2OTk4NjY1NTYsImV4cCI6MTcwMTA3NjE1Nn0.0n8X0s6yl9NBb7CzEgnDxCdlw4P1RRcSjfwOeqmGSzM';

export const getAllProfilesDataAction = (me = '') => {
	return async (dispatch) => {
		const profileApiList = `https://striveschool-api.herokuapp.com/api/profile/${me}`;
		try {
			const profileData = await fetch(profileApiList, {
				method: 'GET',
				headers: {
					Authorization: key,
					// 'Content-Type': 'application/json'
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
					Authorization: key,
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
		const id = '6551e7bbc55e7e0018f83bfb';
		const userApiList = `https://striveschool-api.herokuapp.com/api/profile/${id}`;
		try {
			const userData = await fetch(userApiList, {
				method: 'GET',
				headers: {
					Authorization: key,
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

export const handleSubmitAction= (query)=> {
	return async (dispatch) => {
		try {
	   const res = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
	   if (res.ok) {
		 const { data } = await res.json()
		 console.log(data)
		  dispatch({
		  type: GET_JOBS,
		  payload: data,
		 })
	   } else {
		 throw new Error("Error fetching results");
	   }
	 } catch (error) {
	   console.log(error);
	 }
   };
     }