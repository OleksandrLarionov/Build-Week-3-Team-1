import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FcCalendar, FcPicture, FcTemplate } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import ModalImagePost from '../../modal/ModalImagePost';
import { fetchPostsAction, postImageAction } from '../../../redux/action/post';
import { personalkey } from '../../../redux/action';
import SinglePost from './SinglePost';

const API_URL = 'https://striveschool-api.herokuapp.com/api/posts/';

const MyPostComponents = () => {
	const [newPostText, setNewPostText] = useState('');
	const user = useSelector((state) => state.user.userData);
	const formImg = useSelector((state) => state.post.postEditor);
	const posts = useSelector((state) => state.post.posts);
	const dispatch = useDispatch();

	
	useEffect(() => {
		dispatch(fetchPostsAction());
	}, []);

	const handlePostSubmit = async () => {
		try {
			const res = await fetch(API_URL, {
				method: 'POST',
				body: JSON.stringify({ text: newPostText }),
				headers: {
					Authorization: personalkey,
					'Content-Type': 'application/json',
				},
			});
			if (res.ok) {
				const post = await res.json();
				const id_post = post._id;
				formImg && dispatch(postImageAction(id_post, formImg));
				setTimeout(() => {
					dispatch(fetchPostsAction());
				}, 500);
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};

	const [modalShow, setModalShow] = useState(false);

	return (
		<>
			<ModalImagePost show={modalShow} onHide={() => setModalShow(false)} />
			<Row className='px-0 mb-1 border rounded-3 m-2 flex-column py-3 elements mx-0'>
				<Col className='d-flex align-items-center'>
					<img
						src={user[0]?.image}
						alt='profile'
						style={{
							height: '50px',
							width: '50px',
							borderRadius: '75px',
							border: '3px solid white',
						}}
					/>
					<Form className='flex-grow-1'>
						<Form.Group className='d-flex align-items-center justify-content-between grow-1'>
							<Form.Control
								style={{ height: '40px', fontSize: '1rem' }}
								type='text'
								placeholder='Avvia un post'
								className='rounded-pill  ms-2 py-0 pe-5 '
								value={newPostText}
								onChange={(e) => setNewPostText(e.target.value)}
							/>
							<Button
								variant='primary'
								onClick={handlePostSubmit}
								className='rounded-pill ms-2'>
								Pubblica
							</Button>
						</Form.Group>
					</Form>
				</Col>

				<Col className='d-flex w-100 justify-content-around pt-3'>
					<Row className='w-100 text-secondary'>
						<Col className='d-flex fw-bold justify-content-between'>
							<div className='d-flex align-items-center hoverDiv mx-2 '>
								<FcPicture className='me-1 fs-4 ' />
								<p className='lh-1 text-center mt-3' onClick={() => setModalShow(true)}>
									Contenuti multimediali
								</p>
							</div>
							<div className='d-flex align-items-center hoverDiv mx-2'>
								<FcCalendar className='me-1 fs-4 ' />
								<p className='lh-1 text-center mt-3 '>Evento</p>
							</div>
							<div className='d-flex align-items-center hoverDiv mx-2'>
								<FcTemplate className='me-1 fs-4  ' />
								<p className='lh-1 text-center mt-3'>Scrivi un articolo</p>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
			<hr className='mx-2' />
			<Row className='mt-3 mx-0'>
				{posts.map((post) => {
					return <SinglePost data={post} />;
				})}
			</Row>
		</>
	);
};

export default MyPostComponents;






