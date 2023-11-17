import SingleComment from './SingleComment';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { IoMdHappy } from 'react-icons/io';
import { IoIosImage } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { MdOutlinePublish } from 'react-icons/md';
import { personalAccess } from '../../../redux/action/commentsAction';

const CommentList = ({ idPost }) => {
	const user = useSelector((state) => state.user.userData);
	const [comment, setComment] = useState([]);
	const [personalComment, setPersonalComment] = useState({
		comment: '',
		rate: '1',
		elementId: idPost,
	});
	// console.log(personalComment);
	const singleComment = async () => {
		const commentApi = `https://striveschool-api.herokuapp.com/api/comments/`;
		try {
			const commentData = await fetch(commentApi, {
				method: 'GET',
				headers: {
					Authorization: personalAccess,
				},
			});
			if (commentData.ok) {
				const data = await commentData.json();
				setTimeout(() => {
					// console.log(data);
					setComment(data.filter((comment) => comment.elementId === idPost).reverse());
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
					Authorization: personalAccess,
					'Content-Type': 'application/json',
				},
			});
			if (response.ok) {
				singleComment();
			} else {
				throw new Error('errore nel salvataggio del commento');
			}
		} catch (error) {
			console.log('error', error);
		}
		setPersonalComment({ comment: '', rate: 1, elementId: idPost });
	};

	useEffect(() => {
		singleComment();
	}, []);

	return (
		<Container>
			<Row className='mb-3'>
				<Col xs={1} className='d-flex justify-content-end pe-0'>
					<img
						src={user[0]?.image}
						alt='User'
						style={{ width: '45px', height: '45px', borderRadius: '50%' }}
					/>
				</Col>
				<Col xs={11} className='ps-0'>
					<Form onSubmit={handleSubmit}>
						<Row>
							<Form.Group controlId='commentText'>
								<Form.Control
									className='rounded-pill'
									style={{ height: '45px' }}
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
						</Row>
						<Row className=' mt-2'>
							<Col className='d-flex justify-content-end'>
								<IoIosImage className='me-2' size={25} />
								<IoMdHappy className='me-2' size={25} />
								<Button type='submit' className='ps-1 pe-2 py-0'>
									<MdOutlinePublish size={25} />
									Pubblica
								</Button>
							</Col>
						</Row>
					</Form>
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
