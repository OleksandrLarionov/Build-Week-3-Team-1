export const GET_EXPERIENCE = 'GET_EXPERIENCE';

export const getUserExperience = () => {
	const id = '6551e7bbc55e7e0018f83bfb';
	const key =
		'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTdiYmM1NWU3ZTAwMThmODNiZmIiLCJpYXQiOjE2OTk4NjY1NTYsImV4cCI6MTcwMTA3NjE1Nn0.0n8X0s6yl9NBb7CzEgnDxCdlw4P1RRcSjfwOeqmGSzM';
	return async (dispatch) => {
		const userExpApi = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;
		try {
			const expData = await fetch(userExpApi, {
				method: 'GET',
				headers: {
					Authorization: key,
					// 'Content-Type': 'application/json'
				},
			});
			if (expData.ok) {
				const data = await expData.json();
				// console.log(data);
				setTimeout(() => {
					dispatch({
						type: GET_EXPERIENCE,
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
