import React, { useEffect, useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { FcCalendar, FcPicture, FcTemplate } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import ModalImagePost from '../../modal/ModalImagePost';
const API_URL = 'https://striveschool-api.herokuapp.com/api/posts/';

const MyPostComponents = () => {
	const [posts, setPosts] = useState([]);
	const [newPostText, setNewPostText] = useState('');
	const user = useSelector((state) => state.user.userData);
	const formImg = useSelector((state) => state.post.postEditor);

	const postImg = async (id_post) => {
		const userExpApi = `https://striveschool-api.herokuapp.com/api/posts/${id_post}`;

		try {
			const imageData = await fetch(userExpApi, {
				method: 'POST',
				body: formImg,
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTdiYmM1NWU3ZTAwMThmODNiZmIiLCJpYXQiOjE2OTk4NjY1NTYsImV4cCI6MTcwMTA3NjE1Nn0.0n8X0s6yl9NBb7CzEgnDxCdlw4P1RRcSjfwOeqmGSzM',
				},
			});
		} catch (error) {
			console.log('Errore', error);
		}
	};

	const fetchPosts = () => {
		fetch(API_URL, {
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTdiYmM1NWU3ZTAwMThmODNiZmIiLCJpYXQiOjE2OTk4NjY1NTYsImV4cCI6MTcwMTA3NjE1Nn0.0n8X0s6yl9NBb7CzEgnDxCdlw4P1RRcSjfwOeqmGSzM',
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Error: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				console.log('Elenco dei post', data);
				setPosts(data.reverse());
			})
			.catch((error) => {
				console.error('Errore nella fetch', error);
			});
	};

	useEffect(() => {
		if (!newPostText) {
			fetchPosts();
		}
	}, [newPostText]);
	const handlePostSubmit = async () => {
		try {
			const res = await fetch(API_URL, {
				method: 'POST',
				body: JSON.stringify({ text: newPostText }),
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZTdiYmM1NWU3ZTAwMThmODNiZmIiLCJpYXQiOjE2OTk4NjY1NTYsImV4cCI6MTcwMTA3NjE1Nn0.0n8X0s6yl9NBb7CzEgnDxCdlw4P1RRcSjfwOeqmGSzM',
					'Content-Type': 'application/json',
				},
			});
			if (res.ok) {
				const post = await res.json();
				const id_post = post._id;
				formImg && postImg(id_post);
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};
	const [modalShow, setModalShow] = useState(false);
	return (
		<>
			<ModalImagePost show={modalShow} onHide={() => setModalShow(false)} />
			<Row className='px-0 mb-1 border rounded-3 m-2 flex-column py-3 elements'>
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
					<Form>
						<Form.Group className='d-flex'>
							<Form.Control
								type='text'
								placeholder='Avvia un post'
								className='rounded-pill w-100 ms-2'
								value={newPostText}
								onChange={(e) => setNewPostText(e.target.value)}
							/>
							<Button variant='primary' onClick={handlePostSubmit}>
								Invia Post
							</Button>
						</Form.Group>
					</Form>
				</Col>

				<Col className='d-flex  w-100 justify-content-center pt-3'>
					<Row className='w-100 text-secondary'>
						<Col className='d-flex justify-content-between'>
							<div className='d-flex align-items-center'>
								<FcPicture className='mb-3 me-2 fs-4' />
								<p onClick={() => setModalShow(true)}>Contenuti multimediali</p>
							</div>
							<div className='d-flex align-items-center'>
								<FcCalendar className='mb-3 me-2 fs-4' />
								<p>Evento</p>
							</div>
							<div className='d-flex align-items-center'>
								<FcTemplate className='mb-3 me-2 fs-4' />
								<p>Scrivi un articolo</p>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
			<hr className='mx-2' />
			<Row className='mx-1 mt-3'>
				{posts.map((data) => (
					<Col className='col-12' key={data._id}>
						<Card className='mb-2'>
							<Row className='p-3 '>
								<Col xs={1}>
									{' '}
									<img
										src={data.user.image}
										alt='profile'
										style={{
											height: '35px',
											width: '35px',
											borderRadius: '10px',
										}}
									/>
								</Col>
								<Col xs={11}>
									<p className='fw-bold mb-0' style={{ fontSize: '0.9rem' }}>
										{data.user.username}
									</p>
									<p className='text-secondary lh-1 mb-0' style={{ fontSize: '0.8rem' }}>
										{' '}
										{data.user.title}
									</p>
								</Col>
							</Row>

							<Card.Body>
								<Card.Text>{data.text}</Card.Text>
								<Card.Img className='image-fluid' src={data.image} alt='' />
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</>
	);
};

export default MyPostComponents;
