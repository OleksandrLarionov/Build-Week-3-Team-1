export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_ONE_COMMENT = 'GET_ONE_COMMENT';

export const commentsAction = (commentID) => {
	return async (dispatch) => {
		const commentApi = 'https://striveschool-api.herokuapp.com/api/comments/';
		try {
			const commentData = await fetch(commentApi, {
				method: 'GET',
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1ZjdiYTE1ODgwMTAwMTg2NDJjYmQiLCJpYXQiOjE3MDAxMzI3OTUsImV4cCI6MTcwMTM0MjM5NX0.kIpOi5hXgT7IbuGh6RIit4L6T9Q6SVXmrOOMpKRCLj4',
				},
			});
			if (commentData.ok) {
				const data = await commentData.json();
				setTimeout(() => {
					console.log(data);
					dispatch({
						type: GET_COMMENTS,
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
// export const singleCommentsAction = (postID) => {
// 	return async (dispatch) => {
// 		const commentApi = `https://striveschool-api.herokuapp.com/api/comments/${postID}`;
// 		try {
// 			const commentData = await fetch(commentApi, {
// 				method: 'GET',
// 				headers: {
// 					Authorization:
// 						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1ZjdiYTE1ODgwMTAwMTg2NDJjYmQiLCJpYXQiOjE3MDAxMzI3OTUsImV4cCI6MTcwMTM0MjM5NX0.kIpOi5hXgT7IbuGh6RIit4L6T9Q6SVXmrOOMpKRCLj4',
// 				},
// 			});
// 			if (commentData.ok) {
// 				const data = await commentData.json();
// 				setTimeout(() => {
// 					console.log(data);
// 					dispatch({
// 						type: GET_ONE_COMMENT,
// 						payload: data,
// 					});
// 				}, 500);
// 			} else {
// 				throw new Error('Errore nel download dei dati profilo');
// 			}
// 		} catch (error) {
// 			console.log('Errore', error);
// 		}
// 	};
// };
