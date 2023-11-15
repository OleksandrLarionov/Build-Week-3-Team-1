import { personalkey } from '../action/index';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const GET_POST_IMAGE = 'GET_POST_IMAGE';
export const getImageAction = (image) => ({
	type: GET_POST_IMAGE,
	payload: image,
});
export const fetchPostsRequest = () => ({
	type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
	type: FETCH_POSTS_SUCCESS,
	payload: posts,
});

export const fetchPostsFailure = (error) => ({
	type: FETCH_POSTS_FAILURE,
	payload: error,
});
export const postImageAction = (id_post, formImg) => {
	return async (dispach) => {
		const userExpApi = `https://striveschool-api.herokuapp.com/api/posts/${id_post}`;

		try {
			const imageData = await fetch(userExpApi, {
				method: 'POST',
				body: formImg,
				headers: {
					Authorization: personalkey,
				},
			});
		} catch (error) {
			console.log('Errore', error);
		}
	};
};

export const fetchPostsAction = () => {
	const API_URL = 'https://striveschool-api.herokuapp.com/api/posts/';
	const key = personalkey;

	return async (dispatch) => {
		const postApi = API_URL;
		try {
			const apiData = await fetch(postApi, {
				headers: {
					Authorization: key,
				},
			});
			if (apiData.ok) {
				const data = await apiData.json();
				const reverseData = data.reverse();
				// console.log(data);
				setTimeout(() => {
					dispatch({
						type: FETCH_POSTS_SUCCESS,
						payload: reverseData,
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
