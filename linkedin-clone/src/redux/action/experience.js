import { personalUserID } from '../action/index';
import { personalkey } from '../action/index';
export const GET_EXPERIENCE = 'GET_EXPERIENCE';
export const getUserExperience = () => {
	return async (dispatch) => {
		const userExpApi = `https://striveschool-api.herokuapp.com/api/profile/${personalUserID}/experiences`;
		try {
			const expData = await fetch(userExpApi, {
				method: 'GET',
				headers: {
					Authorization: personalkey,
				},
			});
			if (expData.ok) {
				const data = await expData.json();
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
