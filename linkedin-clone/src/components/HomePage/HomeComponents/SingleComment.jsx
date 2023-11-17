import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import scimmia from '../../../../src/scimmia.jpg';
import { useDispatch } from 'react-redux';
import { fetchPostsAction } from '../../../redux/action/post';

const SingleComment = ({ data }) => {
	const dispatch = useDispatch();
	return (
		<Row style={{ marginBottom: '10px' }}>
			<Col md={2}>
				<img
					className='ms-3'
					src={scimmia}
					alt='User'
					style={{ width: '50px', height: '50px', borderRadius: '50%' }}
				/>
			</Col>
			<Col md={10}>
				<div>
					<strong>{data.author}</strong>
				</div>
				<div>JOB</div>
				<div>{data.comment}</div>
			</Col>
			<Button
				variant='warning'
				onClick={async (e) => {
					e.preventDefault();
					const commentApi = `https://striveschool-api.herokuapp.com/api/comments/${data._id}`;
					try {
						const commentData = await fetch(commentApi, {
							method: 'DELETE',
							headers: {
								Authorization:
									'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1ZjdiYTE1ODgwMTAwMTg2NDJjYmQiLCJpYXQiOjE3MDAxMzI3OTUsImV4cCI6MTcwMTM0MjM5NX0.kIpOi5hXgT7IbuGh6RIit4L6T9Q6SVXmrOOMpKRCLj4',
							},
						});
					} catch (error) {
						console.log('Errore', error);
					}
					dispatch(fetchPostsAction());
				}}>
				DEL
			</Button>
		</Row>
	);
};

export default SingleComment;
