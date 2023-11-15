import { personalkey } from '../action/index';
export const GET_EXPERIENCE = 'GET_EXPERIENCE';
export const getUserExperience = () => {
	const id = '6551e7bbc55e7e0018f83bfb';
	return async (dispatch) => {
		const userExpApi = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;
		try {
			const expData = await fetch(userExpApi, {
				method: 'GET',
				headers: {
					Authorization: personalkey,
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
