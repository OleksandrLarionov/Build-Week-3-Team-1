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
	const mese = [
		'Gennaio',
		'Febbraio',
		'Marzo',
		'Aprile',
		'Maggio',
		'Giugno',
		'Luglio',
		'Agosto',
		'Settembre',
		'Ottobre',
		'Novembre',
		'Dicembre',
	];
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
	//   Modello dell'EXPERIENCE:
	// {
	//   "role": "Full Stack Web Developer",
	//   "company": "FizzBuzz",
	//   "startDate": "2022-06-16",
	//   "endDate": "2023-06-16", // può essere null
	//   "description": "Implementing new features",
	//   "area": "Milan",

	//   "username": "mario88", // SERVER GENERATED
	//   "image": ..., // SERVER GENERATED, modificabile
	//   "createdAt": 2023-06-16T19:58:31.019Z", // SERVER GENERATED
	//   "updatedAt": "2023-06-16T19:58:31.019Z", // SERVER GENERATED
	//   "__v": 0 // SERVER GENERATED
	//   "_id": "5d925e677360c41e0046d1f5" // SERVER GENERATED
	// }
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
			<p>* Indica che è obbligatorio</p>
			<Modal.Body>
				<Container>
					<Row>
						<Col>
							<Form onSubmit={sendAllExp}>
								{' '}
								<Form.Group md='12'>
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
								<p>Tipo di impiego</p>
								<Form.Select aria-label='tipo di impiego'>
									<option>seleziona</option>
									<option value='1'>A tempo pieno</option>
									<option value='2'>Autonomo</option>
									<option value='3'>Freelance</option>
									<option value='4'>A contratto</option>
									<option value='5'>Stage</option>
									<option value='6'>Apprendistato</option>
									<option value='7'>Stagionale</option>
								</Form.Select>
								<p>
									Scopri di più sui{' '}
									<span className='fw-bold text-primary'>tipi di impiego</span>
								</p>
								<Form.Group md='12'>
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
								<Form.Group md='12'>
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
								<p>Tipo di impiego</p>
								<Form.Select aria-label='tipo di impiego'>
									<option>seleziona</option>
									<option value='1'>In sede</option>
									<option value='2'>Ibrida</option>
									<option value='3'>Da remoto</option>
								</Form.Select>
								<p>Scopri di più sui Scegli un tipo di località (es. da remoto)</p>
								<Form.Check // prettier-ignore
									type='checkbox'
									label='Attualmente ricopro questo ruolo'
								/>
								<Row>
									<Col>
										<Form.Group md='12'>
											<Form.Label>Data di inizio*</Form.Label>
											<Form.Control
												required
												type='date'
												placeholder='Esempio: Milano, Italia'
												value={dataExp.startDate}
												onChange={(e) => {
													e.preventDefault();
													setDataExp({ ...dataExp, startDate: e.target.value });
												}}
											/>
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<p>Data di fine*</p>
									<Col>
										{' '}
										<Form.Select aria-label='tipo di impiego'>
											<option>Mese</option>
											{mese.map((mese, i) => {
												return (
													<option key={i} value={i}>
														{mese}
													</option>
												);
											})}
										</Form.Select>
									</Col>
									<Col>
										{' '}
										<Form.Select aria-label='tipo di impiego'>
											<option>Anno</option>
											<option value='1'>2023</option>
											<option value='2'>2022</option>
											<option value='3'>2021</option>
											<option value='3'>2020</option>
											<option value='3'>2019</option>
										</Form.Select>
									</Col>
								</Row>
								<Form.Group md='12'>
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
									<Button
										onClick={async () => {
											const id = '6551e7bbc55e7e0018f83bfb';
											const userExpApi = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/6553d240dd99ef0019a0948a/picture`;

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
										}}>
										carica
									</Button>
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
