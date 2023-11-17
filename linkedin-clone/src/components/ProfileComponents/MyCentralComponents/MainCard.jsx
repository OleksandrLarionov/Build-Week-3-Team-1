import { Row, Col, Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ImPencil } from 'react-icons/im';
import { PiStudent } from 'react-icons/pi';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { modifyUserAction } from '../../../redux/action';
import { Link } from'react-router-dom';
import { personalUserID } from '../../../redux/action';
import { personalkey } from '../../../redux/action';


const MainCard = () => {
	// modal
	const dispatch = useDispatch();
	const handreSubmit = async (e) => {
		e.preventDefault();
		dispatch(modifyUserAction(dataUser, personalkey));
	};
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const prevviuousDataUser = useSelector((state) => state.user.userData && state.user.userData[0]);
	const [dataUser, setDataUser] = useState({
		name: '',
		surname: '',
		email: '',
		username: '',
		bio: '',
		title: '',
		area: '',
	});
	const loadImageProfile = async () => {
		const userApiList = `https://striveschool-api.herokuapp.com/api/profile/${personalUserID}/picture`;

		try {
			const imageData = await fetch(userApiList, {
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

	const [formImg, setFormImg] = useState(null);
	useEffect(() => {
		if (prevviuousDataUser) {
			setDataUser({
				name: prevviuousDataUser.name,
				surname: prevviuousDataUser.surname,
				email: prevviuousDataUser.email,
				username: prevviuousDataUser.username,
				bio: prevviuousDataUser.bio,
				title: prevviuousDataUser.title,
				area: prevviuousDataUser.area,
			});
		}
	}, [prevviuousDataUser]);

	// modal
	const user = useSelector((state) => state.user.userData);
	return (
		<Row>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Form onSubmit={handreSubmit}>
							<Form.Group md='12' className='my-2'>
								<Form.Control
									required
									type='text'
									placeholder='name'
									value={dataUser.name}
									onChange={(e) => {
										e.preventDefault();
										setDataUser({ ...dataUser, name: e.target.value });
									}}
								/>
							</Form.Group>
							<Form.Group md='12' className='my-2'>
								<Form.Control
									required
									type='text'
									placeholder='surname'
									value={dataUser.surname}
									onChange={(e) => {
										e.preventDefault();
										setDataUser({ ...dataUser, surname: e.target.value });
									}}
								/>
							</Form.Group>
							<Form.Group md='12' className='my-2'>
								<Form.Control
									required
									type='email'
									placeholder='email'
									value={dataUser.email}
									onChange={(e) => {
										e.preventDefault();
										setDataUser({ ...dataUser, email: e.target.value });
									}}
								/>
							</Form.Group>
							<Form.Group md='12' className='my-2'>
								<Form.Control
									required
									type='text'
									placeholder='username'
									value={dataUser.username}
									onChange={(e) => {
										e.preventDefault();
										setDataUser({ ...dataUser, username: e.target.value });
									}}
								/>
							</Form.Group>
							<Form.Group md='12' className='my-2'>
								<Form.Control
									required
									as='textarea'
									rows={3}
									placeholder='bio'
									value={dataUser.bio}
									onChange={(e) => {
										e.preventDefault();
										setDataUser({ ...dataUser, bio: e.target.value });
									}}
								/>
							</Form.Group>
							<Form.Group md='12' className='my-2'>
								<Form.Control
									required
									type='text'
									placeholder='title'
									value={dataUser.title}
									onChange={(e) => {
										e.preventDefault();
										setDataUser({ ...dataUser, title: e.target.value });
									}}
								/>
							</Form.Group>

							<Form.Group md='12' className='my-2'>
								<Form.Control
									required
									type='text'
									placeholder='area'
									value={dataUser.area}
									onChange={(e) => {
										e.preventDefault();
										setDataUser({ ...dataUser, area: e.target.value });
									}}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Control
									type='file'
									onChange={(e) => {
										const file = e.target.files[0];
										if (file) {
											const formData = new FormData();
											formData.append('profile', file);
											setFormImg(formData);
										}
									}}
								/>
							</Form.Group>
							<Button variant='secondary' onClick={loadImageProfile}>
								Up Profile image
							</Button>
						</Form>
					</Container>
				</Modal.Body>
				<Modal.Footer>
				<Link to ='/MyProfile'>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					</Link>
					<Button variant='primary' onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			<Col className='px-0 elements mb-1'>
				<Card
					className='position-relative border-0'
					style={{ border: '1px solid rgb(223,222,219)' }}>
					<Card.Img
						variant='top'
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ItjUjmdyS3oifHWUhSGsSpNphIZ38hZ3Obdz2FjU&s'
						style={{ height: '200px' }}
					/>
					<Card.Body className='mt-5'>
						<div className='text-end'>
							<ImPencil
								onClick={handleShow}
								className='fs-5'
								style={{ position: 'absolute', right: '20px', top: '220px' }}
							/>
							<img
								src={user[0]?.image}
								alt='profile'
								style={{
									height: '150px',
									width: '150px',
									borderRadius: '75px',
									border: '3px solid white',
									position: 'absolute',
									left: '20px',
									top: '100px',
								}}
							/>
						</div>
						<Row>
							<Col className='col-8 lh-1'>
								<Card.Title className='fw-bold mb-0' style={{ fontSize: '1.4rem' }}>
									{user[0]?.name} {user[0]?.surname}
								</Card.Title>
								<Card.Text className='mb-0' style={{ fontSize: '0.9rem' }}>
									{user[0]?.title}
								</Card.Text>
								<Card.Text className='mb-0 text-secondary' style={{ fontSize: '0.8rem' }}>
									{user[0]?.area} <span className='fs-5'>· </span>
									<span className='text-primary fw-bold'>Informazioni di contatto</span>
								</Card.Text>
								<Card.Text className='text-primary fw-bold' style={{ fontSize: '0.8rem' }}>
									45 collegamenti
								</Card.Text>{' '}
							</Col>
							<Col className='col-3 fw-bold' style={{ fontSize: '0.8rem' }}>
								<Row className='justify-content-start align-items-start'>
									<Col className='col-2'>
										<PiStudent className='fs-5 ' />
									</Col>
									<Col>
										<p> Istituto di sanità mentale<br/>
											Laurea con lode </p>
									</Col>
								</Row>
							</Col>
							<div className='mt-3' style={{ fontSize: '0.9rem' }}>
								<Button
									variant='primary'
									className='rounded-pill fw-bold me-2'
									style={{ maxWidth: '150px' }}>
									Disponibile per
								</Button>
								<Button
									variant='outline-primary'
									className='rounded-pill fw-bold  me-2'
									style={{ maxWidth: '250px' }}>
									Aggiungi sezione del profilo
								</Button>
								<Button
									variant='outline-secondary'
									className='rounded-pill fw-bold'
									style={{ maxWidth: '70px' }}>
									Altro
								</Button>
							</div>
							<Card.Text
								className='d-flex justify-content-between mt-3 ms-2 rounded py-2 '
								style={{
									fontSize: '0.9rem',
									backgroundColor: 'rgb(223,231,240',
									width: '60%',
								}}>
								<div className='d-flex flex-column' style={{ fontSize: '0.8rem' }}>
									<span className='mb-0 fw-bold pb-0'>Disponibile a lavorare</span>
									<span>Ruolo di Front-End Developer</span>
									<span className='fw-bold text-primary'>Mostra dettagli</span>
								</div>
								<div>
									<ImPencil />
								</div>
							</Card.Text>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default MainCard;
