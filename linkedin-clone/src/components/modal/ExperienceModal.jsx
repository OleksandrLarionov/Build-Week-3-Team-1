import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { key } from '../../redux/action';
const ExperienceModal = (props) => {
	const [formImg, setFormImg] = useState(null);
	const [dataExp, setDataExp] = useState({
		role: '',
		company: '',
		startDate: '',
		endDate: '',
		description: '',
		area: '',
	});
	const postExperience = async () => {
		const id = '6551e7bbc55e7e0018f83bfb';
		const expApiList = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;
		try {
			const postExp = await fetch(expApiList, {
				method: 'POST',
				body: JSON.stringify(dataExp),
				headers: {
					Authorization: key,
					'Content-Type': 'application/json',
				},
			});
			if (postExp.ok) {
				const dataExp = await postExp.json();
				// console.log("dati mandati dell'exp", dataExp);
				const id_experience = dataExp._id;
				formImg && postImg(id_experience);
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};
	const postImg = async (id_experience) => {
		const id = '6551e7bbc55e7e0018f83bfb';
		const userExpApi = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${id_experience}/picture`;

		try {
			const imageData = await fetch(userExpApi, {
				method: 'POST',
				body: formImg,
				headers: {
					Authorization: key,
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
										required
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
										required
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
										required
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
										required
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
										required
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
			</Modal.Footer>
		</Modal>
	);
};

export default ExperienceModal;
