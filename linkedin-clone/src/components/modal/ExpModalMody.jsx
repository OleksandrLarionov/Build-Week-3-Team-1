import { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { format, parseISO } from 'date-fns';
import { useDispatch } from 'react-redux';
import { getUserExperience } from '../../redux/action/experience';
const ExpModalMody = (props) => {
	const personalkey = useSelector(state => state.access.key)
	const personalUserID = useSelector(state => state.access.id)
	const dispatch = useDispatch();
	const [formImg, setFormImg] = useState(null);
	const [dataExp, setDataExp] = useState({
		role: '',
		company: '',
		startDate: '',
		endDate: '',
		description: '',
		area: '',
	});
	const deleteSingleExp = async (e) => {
		e.preventDefault();
		const expApiList = `https://striveschool-api.herokuapp.com/api/profile/${personalUserID}/experiences/${props.id}`;
		try {
			const delExp = await fetch(expApiList, {
				method: 'DELETE',
				headers: {
					Authorization: personalkey,
				},
			});
		} catch (error) {
			console.log('Errore', error);
		}
		dispatch(getUserExperience());
	};

	const getSingleExp = async () => {
		const expApiList = `https://striveschool-api.herokuapp.com/api/profile/${personalUserID}/experiences/${props.id}`;
		try {
			const postExp = await fetch(expApiList, {
				method: 'GET',
				headers: {
					Authorization: personalkey,
				},
			});
			if (postExp.ok) {
				const singleExpData = await postExp.json();
				console.log('singleData', singleExpData);
				setDataExp({
					role: singleExpData.role,
					company: singleExpData.company,
					startDate: `${format(parseISO(singleExpData.startDate), 'yyyy-MM-dd')}`,
					endDate: singleExpData.endDate
						? `${format(parseISO(singleExpData.endDate), 'yyyy-MM-dd')}`
						: '',
					description: singleExpData.description,
					area: singleExpData.area,
				});
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};
	useEffect(() => {
		if (props.id) {
			getSingleExp();
		}
	}, [props.id]);
	const postExperience = async () => {
		const expApiList = `https://striveschool-api.herokuapp.com/api/profile/${personalUserID}/experiences/${props.id}`;
		try {
			const postExp = await fetch(expApiList, {
				method: 'PUT',
				body: JSON.stringify(dataExp),
				headers: {
					Authorization: personalkey,
					'Content-Type': 'application/json',
				},
			});
			if (postExp.ok) {
				const dataExp = await postExp.json();
				const id_experience = dataExp._id;
				formImg && postImg(id_experience);
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};
	const postImg = async (id_experience) => {
		const userExpApi = `https://striveschool-api.herokuapp.com/api/profile/${personalUserID}/experiences/${id_experience}/picture`;

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
	const sendAllExp = (e) => {
		e.preventDefault();
		postExperience();
		setDataExp({
			role: '',
			company: '',
			startDate: '',
			endDate: '',
			description: '',
			area: '',
		});
		dispatch(getUserExperience());
	};
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			scrollable='true'>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>Aggiungi esperienza</Modal.Title>
			</Modal.Header>
			<p className='m-4'>* Indica che è obbligatorio</p>
			<Modal.Body>
				<Container>
					<Row>
						<Col>
							<Form onSubmit={sendAllExp}>
								{' '}
								<Form.Group md='12' className='my-3'>
									<Form.Label>Qualifica*</Form.Label>
									<Form.Control
										className='mb-2'
										type='text'
										placeholder='Esempio: Retail Sales Manager'
										value={dataExp.role}
										onChange={(e) => {
											e.preventDefault();
											setDataExp({ ...dataExp, role: e.target.value });
										}}
									/>
								</Form.Group>
								<Form.Group md='12' className='my-3'>
									<Form.Label>Nome azienda*</Form.Label>
									<Form.Control
										className='mb-3'
										type='text'
										placeholder='Esempio: Microsoft'
										value={dataExp.company}
										onChange={(e) => {
											e.preventDefault();
											setDataExp({ ...dataExp, company: e.target.value });
										}}
									/>
								</Form.Group>
								<Form.Group md='12' className='my-3'>
									<Form.Label>Località*</Form.Label>
									<Form.Control
										className='mb-3'
										type='text'
										placeholder='Esempio: Milano, Italia'
										value={dataExp.area}
										onChange={(e) => {
											e.preventDefault();
											setDataExp({ ...dataExp, area: e.target.value });
										}}
									/>
								</Form.Group>
								<Form.Check type='checkbox' label='Attualmente ricopro questo ruolo' />
								<Form.Group md='12' className='my-3'>
									<Form.Label>Data di inizio*</Form.Label>
									<Form.Control
										type='date'
										value={dataExp.startDate}
										onChange={(e) => {
											e.preventDefault();
											setDataExp({ ...dataExp, startDate: e.target.value });
										}}
									/>
								</Form.Group>
								<Form.Group md='12' className='my-3'>
									<Form.Label>Data di fine</Form.Label>
									<Form.Control
										type='date'
										value={dataExp.endDate}
										onChange={(e) => {
											e.preventDefault();
											setDataExp({ ...dataExp, endDate: e.target.value });
										}}
									/>
								</Form.Group>
								<Form.Group md='12' className='my-3'>
									<Form.Label>Descrizione*</Form.Label>
									<Form.Control
										as='textarea'
										rows={4}
										placeholder=''
										value={dataExp.description}
										onChange={(e) => {
											e.preventDefault();
											setDataExp({ ...dataExp, description: e.target.value });
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
												formData.append('experience', file);
												setFormImg(formData);
											}
										}}
									/>
								</Form.Group>
							</Form>
						</Col>
					</Row>
				</Container>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={sendAllExp}>Salva</Button>
				<Button variant='warning' onClick={deleteSingleExp}>
					Delete
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ExpModalMody;
