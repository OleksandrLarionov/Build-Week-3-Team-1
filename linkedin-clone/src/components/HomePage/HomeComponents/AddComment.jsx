import SingleComment from './SingleComment';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { IoMdHappy } from 'react-icons/io';
import { IoIosImage } from 'react-icons/io';
import { useEffect, useState } from 'react';

const CommentList = ({ idPost }) => {
	const user = useSelector((state) => state.user.userData);
	const [comment, setComment] = useState([]);
	const [personalComment, setPersonalComment] = useState({
		comment: '',
		rate: '1',
		elementId: idPost,
	});
	console.log(personalComment);
	const singleComment = async () => {
		const commentApi = `https://striveschool-api.herokuapp.com/api/comments/`;
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
					setComment(data.filter((comment) => comment.elementId === idPost));
				}, 500);
			} else {
				throw new Error('Errore nel download dei dati profilo');
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
				method: 'POST',
				body: JSON.stringify(personalComment),
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU1ZjdiYTE1ODgwMTAwMTg2NDJjYmQiLCJpYXQiOjE3MDAxMzI3OTUsImV4cCI6MTcwMTM0MjM5NX0.kIpOi5hXgT7IbuGh6RIit4L6T9Q6SVXmrOOMpKRCLj4',
					'Content-Type': 'application/json',
				},
			});
			if (response.ok) {
			} else {
				throw new Error('errore nel salvataggio del commento');
			}
		} catch (error) {
			console.log('error', error);
		}
	};

	useEffect(() => {
		singleComment();
	}, []);

	return (
		<Container>
			<Row className='mb-3'>
				<Col md={1}>
					<img
						src={user[0]?.image}
						alt='User'
						style={{ width: '50px', height: '50px', borderRadius: '50%' }}
					/>
				</Col>
				<Col md={9}>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId='commentText'>
							<Form.Control
								value={personalComment.comment}
								as='textarea'
								rows={2}
								placeholder='Inserisci il tuo commento...'
								onChange={(e) => {
									e.preventDefault();
									setPersonalComment({
										...personalComment,
										comment: e.target.value,
									});
								}}
							/>
						</Form.Group>
						<Button type='submit'></Button>
					</Form>
				</Col>
				<Col md={2}>
					<IoMdHappy className='mr-2' size={20} />
					<IoIosImage className='mr-2' size={20} />
				</Col>
			</Row>

			{/* {comments.map(() => ( */}
			{comment &&
				comment.map((comment, i) => {
					return <SingleComment key={comment._id} user='iduser' data={comment} />;
				})}

			{/* ))} */}
		</Container>
	);
};

export default CommentList;
